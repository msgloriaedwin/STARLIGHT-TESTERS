#!/bin/bash

set -e

# Assign environment variables
export NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
export GIF_API_KEY=${GIF_API_KEY}
export API_URL=${API_URL}  # This was overwriting GIF_API_KEY

export PORT=6001

# Navigate to the project directory
cd /home/bingofe/remote-bingo/staging/bingo_fe

# Pull the latest changes from the staging branch
git stash
git pull origin staging

# Install dependencies
pnpm install 

# Clear any previous build artifacts
rm -rf .next

# Build the application
pnpm run build

# Define the PM2 application name
APP_NAME="bingofe-staging"

# Check if the application is already running and restart it
if pm2 list | grep -q $APP_NAME; then
  echo "Application is already running. Restarting..."
  pm2 restart $APP_NAME
else
  echo "Application is not running. Starting..."
  pm2 start ecosystem.config.js --name $APP_NAME --env production
fi

# Save the PM2 process list and environment
pm2 save
