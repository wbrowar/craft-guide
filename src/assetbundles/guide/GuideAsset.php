<?php
/**
 * Guide plugin for Craft CMS 3.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2019 Will Browar
 */

namespace wbrowar\guide\assetbundles\Guide;

use Craft;
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
            'js/guide.2.1.3.js',
        ];

        $this->css = [
            'css/guide.2.1.3.css',
        ];

        parent::init();
    }
}
