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

# Install production dependencies
pnpm install --production

# Build the application (if needed)
pnpm run build

# Start or restart the application using PM2
pm2 start --name "bingo-staging" -- -p 6001

# Use the following command if you want to restart an existing PM2 process
# pm2 restart bingo-staging
