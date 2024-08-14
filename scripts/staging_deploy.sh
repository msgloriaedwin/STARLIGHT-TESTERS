#!/bin/bash

set -e

# Use environment variables
export NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
export GIF_API_KEY=${GIF_API_KEY}

# Navigate to the root of the repository
cd "$(git rev-parse --show-toplevel)"
git stash
git pull origin staging
docker pull hngtechie/bingofe:staging

# Bring up the services with environment variables
docker-compose --project-name staging-bingofe -f docker/staging/docker-compose.yml up -d


# set -e

# cd "$(git rev-parse --show-toplevel)"
# git stash
# git pull origin staging
# docker pull hngtechie/bingofe:staging
# docker compose --project-name staging-bingofe -f docker/staging/docker-compose.yml up -d
