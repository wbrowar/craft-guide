<?php

namespace wbrowar\guide\web\assets;

use craft\web\AssetBundle;

/**
 * Asset bundle to display Guide book 3D model.
 */
class GuideBookAsset extends AssetBundle
{
    /**
     * @inheritdoc
     */
    public function init(): void
    {
        $this->js = ['guide-book.js'];
        $this->jsOptions = ['type' => 'module'];
        $this->sourcePath = '@wbrowar/guide/web/assets/dist/assets';

        parent::init();
    }
}
