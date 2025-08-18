<?php

namespace wbrowar\guide\web\assets;

use craft\web\AssetBundle;
use wbrowar\guide\helpers\GuideAssetHelper;

/**
 * Asset bundle to display animation on User Guide page.
 */
class GuideWelcomeAsset extends AssetBundle
{
    /**
     * @inheritdoc
     */
    public function init(): void
    {
        $this->sourcePath = '@wbrowar/guide/web/assets/dist/assets';
        $this->jsOptions = ['type' => 'module'];

        $assets = GuideAssetHelper::getPathsToAssetFiles('guide-welcome.ts');

        $this->css = !empty($assets['css']['filename']) ? [$assets['css']['filename']] : [];
        $this->js = !empty($assets['js']['filename']) ? [$assets['js']['filename']] : [];

        parent::init();
    }
}
