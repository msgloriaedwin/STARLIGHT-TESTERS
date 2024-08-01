#!/bin/bash

set -e

cd "$(git rev-parse --show-toplevel)"
git pull origin staging
docker pull tella1234/starlight_fe:staging
docker compose --project-name staging-bingofe -f docker/staging/docker-compose.yml up -d
