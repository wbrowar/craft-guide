<?php

namespace wbrowar\guide\web\assets;

use Craft;
use craft\web\AssetBundle;

/**
 * Static assets for users who can edit guides.
 */
class GuideAdminAsset extends AssetBundle
{
    /**
     * @inheritdoc
     */
    public function init(): void
    {
        $this->js = ['guide-admin.js'];
        $this->jsOptions = ['position' => Craft::$app->getView()::POS_BEGIN, 'type' => 'module'];
        $this->sourcePath = '@wbrowar/guide/web/assets/dist/assets';

        parent::init();
    }
}
