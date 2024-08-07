#!/bin/bash

set -e

cd "$(git rev-parse --show-toplevel)"
git stash
git pull origin staging
docker compose --project-name staging-bingofe -f docker/staging/docker-compose.yml up -d
