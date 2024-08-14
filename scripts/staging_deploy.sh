#!/bin/bash

set -e

# Use environment variables
export NEXT_PUBLIC_API_GOOGLE_SIGN_UP_URL=${NEXT_PUBLIC_API_GOOGLE_SIGN_UP_URL}
export NEXT_PUBLIC_API_SIGN_IN_URL=${NEXT_PUBLIC_API_SIGN_IN_URL}
export NEXT_PUBLIC_API_SIGN_UP_URL=${NEXT_PUBLIC_API_SIGN_UP_URL}
export NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

cd "$(git rev-parse --show-toplevel)"
git stash
git pull origin staging
docker pull hngtechie/bingofe:staging

# Pass environment variables to Docker Compose
docker compose --project-name staging-bingofe -f docker/staging/docker-compose.yml up -d \
  -e NEXT_PUBLIC_API_GOOGLE_SIGN_UP_URL=$NEXT_PUBLIC_API_GOOGLE_SIGN_UP_URL \
  -e NEXT_PUBLIC_API_SIGN_IN_URL=$NEXT_PUBLIC_API_SIGN_IN_URL \
  -e NEXT_PUBLIC_API_SIGN_UP_URL=$NEXT_PUBLIC_API_SIGN_UP_URL \
  -e NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL


# set -e

# cd "$(git rev-parse --show-toplevel)"
# git stash
# git pull origin staging
# docker pull hngtechie/bingofe:staging
# docker compose --project-name staging-bingofe -f docker/staging/docker-compose.yml up -d
