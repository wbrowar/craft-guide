<?php

namespace wbrowar\guide\web\assets;

use Craft;
use craft\web\AssetBundle;
use wbrowar\guide\helpers\GuideAssetHelper;

/**
 * Static assets for users who can view guides.
 */
class GuideDisplayAsset extends AssetBundle
{
    /**
     * @inheritdoc
     */
    public function init(): void
    {
        $this->sourcePath = '@wbrowar/guide/web/assets/dist/assets';
        $this->jsOptions = ['position' => Craft::$app->getView()::POS_BEGIN, 'type' => 'module'];

        $assets = GuideAssetHelper::getPathsToAssetFiles('guide-display.ts');

        $this->css = !empty($assets['css']['filename']) ? [$assets['css']['filename']] : [];
        $this->js = !empty($assets['js']['filename']) ? [$assets['js']['filename']] : [];

        parent::init();
    }
}
