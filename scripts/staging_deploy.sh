#!/bin/bash

set -e

# Use environment variables
export NEXT_PUBLIC_API_GOOGLE_SIGN_UP_URL=${NEXT_PUBLIC_API_GOOGLE_SIGN_UP_URL}
export NEXT_PUBLIC_API_SIGN_IN_URL=${NEXT_PUBLIC_API_SIGN_IN_URL}
export NEXT_PUBLIC_API_SIGN_UP_URL=${NEXT_PUBLIC_API_SIGN_UP_URL}
export NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
export GIF_API_KEY=${GIF_API_KEY}

# Navigate to the root of the repository
cd "$(git rev-parse --show-toplevel)"
git stash
git pull origin staging
docker pull hngtechie/bingofe:staging

# Set the project name for Docker Compose (optional)
export COMPOSE_PROJECT_NAME=staging-bingofe

# Bring up the services with environment variables
docker-compose -f docker/staging/docker-compose.yml up -d


# set -e

# cd "$(git rev-parse --show-toplevel)"
# git stash
# git pull origin staging
# docker pull hngtechie/bingofe:staging
# docker compose --project-name staging-bingofe -f docker/staging/docker-compose.yml up -d
