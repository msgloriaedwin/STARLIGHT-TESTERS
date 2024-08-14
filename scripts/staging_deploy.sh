#!/bin/bash

set -e

# Assign environment variables
export NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
export GIF_API_KEY=${GIF_API_KEY}

# Navigate to the project directory
cd /home/starlight-nestjs/remote-bingo/staging/bingo_fe

# Pull the latest changes from the staging branch
git stash
git pull origin staging

# Ensure pnpm is installed locally
npm install -g pnpm

# Install production dependencies
pnpm install 

# Clear any previous build artifacts
rm -rf .next

# Build the application
pnpm run build

# Start or restart the application using PM2
pm2 start ecosystem.config.js --env production
