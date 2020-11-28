#!/bin/bash

# CD to the right directory
cd /var/www/html

# Search for .env to see whether we've already finished local setup
ENV_FILE=".env"
VENDOR="vendor/"

if [ -d "$VENDOR" ]
then
    echo "Checking for .env file."
    if [ -f "$ENV_FILE" ]
    then
        echo "Running Craft tasks."
        php ./craft migrate/all
        php ./craft project-config/apply
        php ./craft cache/flush-all
    else
        echo "No .env file, not running Craft tasks."
    fi
else
    echo "Composer packages not installed, cannot run Craft tasks."
fi