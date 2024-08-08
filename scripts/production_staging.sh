#!/bin/bash

set -e

cd "$(git rev-parse --show-toplevel)"
git stash
git pull origin staging
docker compose --project-name prod-bingofe -f docker/prod/docker-compose.yml up -d
