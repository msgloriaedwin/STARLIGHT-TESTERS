#!/bin/bash

set -e

cd "$(git rev-parse --show-toplevel)"
git pull origin staging
docker pull hngtechie/bingofe:prod
docker compose --project-name prod-bingofe -f docker/staging/docker-compose.yml up -d
