# Use the official Node.js image based on Alpine Linux for a smaller image size
FROM node:20-alpine AS base

FROM base AS deps

# Install build dependencies
RUN apk add --no-cache libc6-compat

# Set the working directory
WORKDIR /app

# Copy package.json
COPY package.json package-lock.json ./

# Install dependencies
RUN corepack enable npm && npm install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN corepack enable npm && npm run build


# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 9001 nodejs
RUN adduser --system --uid 9001 nextjs

# Copy necessary files for production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set the correct permission for prerender cache
RUN mkdir -p .next
RUN chown nextjs:nodejs .next

USER nextjs

EXPOSE 3000

ENV PORT 3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD HOSTNAME="0.0.0.0" node server.js
