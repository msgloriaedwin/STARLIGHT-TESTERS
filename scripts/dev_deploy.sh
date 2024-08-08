#!/bin/bash

set -e

cd "$(git rev-parse --show-toplevel)"
git stash
git pull origin dev
docker compose --project-name dev-bingofe -f docker/development/docker-compose.yml up -d
