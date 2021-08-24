#!/bin/bash

# cd to the right directory and setup environment
cd /var/www/html \
    && sudo apt-get update -y \
    && sudo apt-get install dialog apt-utils libpng-dev build-essential gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget jpegoptim optipng gifsicle webp libtool automake autoconf nasm -y \
    && sudo apt-get clean \
    && sudo apt-get autoremove -y \
    && sudo npm install -g n \
    && sudo n 14 \
    && PATH="$PATH"

# Search for .env to see whether we've already finished local setup
PLUGIN_PACKAGE="wbrowar/guide"

# Check platform
if [ "$(uname)" == "Darwin" ]; then
    PLATFORM="UNIX"
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
    PLATFORM="UNIX"
elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW32_NT" ]; then
    PLATFORM="NT"
elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW64_NT" ]; then
    PLATFORM="NT"
fi

if [ -f ".env" ]
then
    echo "Node environment file found."
else
    echo "Node environment file not found. Copying from example.env."
    if [ -f "example.env" ]
    then
        cp example.env .env
    else
        echo "No example.env found"
    fi
fi

echo "Changing working directory to _source/_craft/"
cd /var/www/html/_source/_craft/

if [ -d "vendor/" ]
then
    echo "Composer packages already installed."
else
    echo "Installing composer packages."
    composer install --no-interaction --optimize-autoloader
fi

echo "Removing installed version of plugin."
rm -rf /var/www/html/_source/_craft/vendor/$PLUGIN_PACKAGE
echo "Replacing installed version with development version."
ln -nfs ../../../../ /var/www/html/_source/_craft/vendor/$PLUGIN_PACKAGE

if [ -f ".env" ]
then
    echo "Craft environment file found."
else
    echo "Craft environment file not found. Copying from example.env."
    if [ -f "example.env" ]
    then
        cp example.env .env
    else
        echo "No example.env found"
    fi
fi

echo "Installing Craft"
./craft install --interactive=0 --email="email@example.com" --username="admin" --password="password" --siteName="Craft Plugin" --siteUrl="\$DEFAULT_SITE_URL" --language="en"
echo "Craft installed with"
echo "  User: admin"
echo "  Password: password"