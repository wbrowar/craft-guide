#!/bin/bash

source /var/www/html/assembly-line.env

if [ -z "$PLUGIN_VENDOR_NAME" ]; then
  printf '%s\n' "Error: ./.ddev/scripts/setup.sh failed. Add or replace a variable, called PLUGIN_VENDOR_NAME, in ./assembly-line.env with your plugin vendor name." >&2
  exit 1
fi

if [ -z "$PLUGIN_PACKAGE_NAME" ]; then
  printf '%s\n' "Error: ./.ddev/scripts/setup.sh failed. Add or replace a variable, called PLUGIN_PACKAGE_NAME, in ./assembly-line.env with your plugin package name." >&2
  exit 1
fi

if [ -z "$CRAFT_SITE_URL" ]; then
  printf '%s\n' "Error: ./.ddev/scripts/setup.sh failed. Add or replace a variable, called SITE_URL, in ./assembly-line.env with the same value set for REPLACE_WITH_SITE_URL.test in ./.ddev/config.yaml." >&2
  exit 1
fi

if [ $PLUGIN_VENDOR_NAME == "REPLACE_WITH_VENDOR_NAME" ]; then
  printf '%s\n' "Error: ./.ddev/scripts/setup.sh failed. Replace REPLACE_WITH_PACKAGE_NAME in ./assembly-line.env with your plugin package name." >&2
  exit 1
fi

if [ $PLUGIN_PACKAGE_NAME == "REPLACE_WITH_PACKAGE_NAME" ]; then
  printf '%s\n' "Error: ./.ddev/scripts/setup.sh failed. Replace REPLACE_WITH_PACKAGE_NAME in ./assembly-line.env with your plugin package name." >&2
  exit 1
fi

if [ $CRAFT_SITE_URL == "https://REPLACE_WITH_SITE_URL.test" ]; then
  printf '%s\n' "Error: ./.ddev/scripts/setup.sh failed. Replace REPLACE_WITH_SITE_URL in ./assembly-line.env with the same value set for REPLACE_WITH_SITE_URL.test in ./.ddev/config.yaml." >&2
  exit 1
fi

# Check that setup is done before setting up project
if grep -Fxq "REPLACE_WITH_NAME" .ddev/config.yaml; then
  printf '%s\n' "Error: ./.ddev/scripts/setup.sh failed. Replace REPLACE_WITH_NAME in ./.ddev/config.yaml with a unique name." >&2
  exit 1
fi

if grep -Fxq "REPLACE_WITH_SITE_URL" .ddev/config.yaml; then
  printf '%s\n' "Error: ./.ddev/scripts/setup.sh failed. Replace REPLACE_WITH_SITE_URL in ./.ddev/config.yaml with a local testing domain. For example setting this to my-project.test lets you visit this Craft site at https://my-project.test/" >&2
  exit 1
fi

if grep -q "REPLACE_WITH_PACKAGE_NAME" _source/_craft/composer.json; then
  printf '%s\n' "Error: ./.ddev/scripts/setup.sh failed. Replace REPLACE_WITH_PACKAGE_NAME in _source/_craft/composer.json with your plugin package name (vendor/name)." >&2
  exit 1
fi


# Begin Craft and Composer installation
echo "Preparing to install plugin"
mkdir -p /var/www/html/.assembly-cache/setup/plugin/
cp /var/www/html/composer.json /var/www/html/.assembly-cache/setup/plugin/composer.json
cp -r /var/www/html/src/ /var/www/html/.assembly-cache/setup/plugin/src/

echo "Changing working directory to _source/_craft/"
cd /var/www/html/_source/_craft/

if [ -d "/var/www/html/_source/_craft/vendor/" ]; then
  echo "Composer packages already installed."
else
  echo "Installing composer packages."
  composer install --no-interaction --optimize-autoloader
fi

if [ -d "/var/www/html/_source/_craft/vendor/$PLUGIN_VENDOR_NAME/$PLUGIN_PACKAGE_NAME" ]; then
  echo "Removing installed version of plugin."
  rm -rf /var/www/html/_source/_craft/vendor/$PLUGIN_VENDOR_NAME/$PLUGIN_PACKAGE_NAME
  echo "Replacing installed version with development version."
  ln -nfs ../../../../ /var/www/html/_source/_craft/vendor/$PLUGIN_VENDOR_NAME/$PLUGIN_PACKAGE_NAME
else
  echo "Symlinking plugin into Craft vendor directory."
  mkdir -p /var/www/html/_source/_craft/vendor/$PLUGIN_VENDOR_NAME/$PLUGIN_PACKAGE_NAME
  rm -rf /var/www/html/_source/_craft/vendor/$PLUGIN_VENDOR_NAME/$PLUGIN_PACKAGE_NAME
  ln -nfs ../../../../ /var/www/html/_source/_craft/vendor/$PLUGIN_VENDOR_NAME/$PLUGIN_PACKAGE_NAME
fi

echo "Deleting setup cache files"
rm -rf /var/www/html/.assembly-cache/setup/

if [ -f "/var/www/html/_source/_craft/.env" ]; then
  echo "Craft environment file found."
else
  echo "Craft environment file not found. Copying from example.env."
  if [ -f "example.env" ]; then
    cp example.env .env
  else
    echo "No example.env found"
  fi
fi

echo "Installing Craft"
./craft install --interactive=0 --email="email@example.com" --username="admin" --password="password" --siteName="Craft Plugin" --siteUrl="\$CRAFT_SITE_URL" --language="en"


# Begin Vite and Node installation
cd /var/www/html/_source/_assets/

if [ -d "./node_modules/" ]
then
    echo "Node packages already installed"
elif [ -f "./package-lock.json" ]
then
    echo "Installing node packages"
    npm ci
else
    echo "Installing node packages"
    npm install
fi


echo "Assembly Line setup complete"
echo "Craft installed with:"
echo "  User: admin"
echo "  Password: password"