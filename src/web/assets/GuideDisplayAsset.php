<?php

namespace wbrowar\guide\web\assets;

use Craft;
use craft\web\AssetBundle;

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
        $this->css = ['guide-display.css'];
        $this->js = ['guide-display.js'];
        $this->jsOptions = ['position' => Craft::$app->getView()::POS_BEGIN, 'type' => 'module'];
        $this->sourcePath = '@wbrowar/guide/web/assets/dist/assets';

        parent::init();
    }
}
