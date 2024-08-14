#!/bin/bash

set -e

# Assign environment variables
export NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
export GIF_API_KEY=${GIF_API_KEY}

# Navigate to the project directory
cd /home/starlight-nestjs/remote-bingo/staging

# Pull the latest changes from the staging branch
git pull origin staging

# Install production dependencies
corepack enable pnpm
pnpm install --production

# Build the application (if you haven't built it in the GitHub Action)
pnpm run build

# Start or restart the application using PM2 (or another process manager)
pm2 start --name "bingo-staging" -- -p 6001

# Use the following command if you want to restart an existing PM2 process
# pm2 restart bingo-staging
