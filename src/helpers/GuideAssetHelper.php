<?php

namespace wbrowar\guide\helpers;

use Craft;
use craft\helpers\App;
use wbrowar\guide\web\assets\GuideAdminAsset;
use wbrowar\guide\web\assets\GuideDisplayAsset;

class GuideAssetHelper
{
    public static function getHmrUrl(): string
    {
        $useHmrEnv = App::parseEnv('$VITE_GUIDE_HMR');
        $useHmr = ((is_string($useHmrEnv) && $useHmrEnv == 'true') || (is_bool($useHmrEnv) && $useHmrEnv == true));
        return $useHmr ? 'http://localhost:3100/' : '';
    }

    /**
     * When in local development mode, register the Vite dev server.
     * Otherwise, register the asset bundles.
     *
     * @return void
     * @throws \yii\base\InvalidConfigException
     */
    public static function registerAssetFiles(string $filename): void
    {
        if (!empty(GuideAssetHelper::getHmrUrl())) {
            Craft::$app->getView()->registerJsFile(GuideAssetHelper::getHmrUrl() . $filename, ['defer' => true, 'type' => 'module']);
        } else {
            switch ($filename) {
                case 'guide-admin.ts':
                    Craft::$app->getView()->registerAssetBundle(GuideAdminAsset::class);
                    break;
                case 'guide-display.ts':
                    Craft::$app->getView()->registerAssetBundle(GuideDisplayAsset::class);
                    break;
            }
        }
    }
}