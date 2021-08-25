<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

if (class_exists('Dotenv\Dotenv') && file_exists('/var/www/html/assembly-line.env')) {
    Dotenv\Dotenv::create('/var/www/html/', 'assembly-line.env')->load();
}

return [
    '*' => [
        'allowUpdates' => false,
        'defaultWeekStartDay' => 1,
        'omitScriptNameInUrls' => true,
        'cpTrigger' => 'admin',
        'securityKey' => getenv('SECURITY_KEY'),
        'useProjectConfigFile' => true,

        'aliases' => [
            '@basePath' => "/var/www/html/_source/_craft",
            '@baseUrl' => getenv('CRAFT_SITE_URL'),
            '@baseAssetPath' => "/var/www/html/_source/_craft/web/uploads",
            '@baseAssetUrl' => getenv('CRAFT_SITE_URL') . "/uploads",
        ],
    ],
    'dev' => [
        'devMode' => true,
    ],
    'staging' => [
        'allowAdminChanges' => true,
    ],
    'production' => [
        'allowAdminChanges' => true,
    ],
];
