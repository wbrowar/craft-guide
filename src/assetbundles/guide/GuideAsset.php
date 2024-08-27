<?php
/**
 * Guide plugin for Craft CMS 5.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2019 Will Browar
 */

namespace wbrowar\guide\assetbundles\guide;

use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

/**
 * @author    Will Browar
 * @package   Guide
 * @since     2.0.0
 */
class GuideAsset extends AssetBundle
{
    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function init()
    {
        $this->sourcePath = "@wbrowar/guide/assetbundles/guide/dist";

        $this->depends = [
            CpAsset::class,
        ];

        $this->js = [
            'js/guide.2.2.0.js',
        ];

        $this->css = [
            'css/guide.2.2.0.css',
        ];

        parent::init();
    }
}
