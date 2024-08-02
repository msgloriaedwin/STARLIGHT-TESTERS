#!/bin/bash

set -e

cd "$(git rev-parse --show-toplevel)"
git pull origin staging
docker pull hngtechie/bingofe:staging
docker compose --project-name staging-bingofe -f docker/staging/docker-compose.yml up -d
