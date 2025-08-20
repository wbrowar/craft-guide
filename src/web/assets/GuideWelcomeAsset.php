<?php

namespace wbrowar\guide\web\assets;

use craft\web\AssetBundle;

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
        $this->js = ['guide-welcome.js'];
        $this->jsOptions = ['type' => 'module'];
        $this->sourcePath = '@wbrowar/guide/web/assets/dist/assets';

        parent::init();
    }
}
