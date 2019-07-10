<?php
/**
 * Guide plugin for Craft CMS 3.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2019 Will Browar
 */

namespace wbrowar\guide\utilities;

use wbrowar\guide\Guide;
use wbrowar\guide\assetbundles\exportguidetemplateutility\ExportGuideTemplateUtilityAsset;

use Craft;
use craft\base\Utility;

/**
 * Guide Utility
 *
 * @author    Will Browar
 * @package   Guide
 * @since     2.0.0
 */
class ExportGuideTemplate extends Utility
{
    // Static
    // =========================================================================

    /**
     * @inheritdoc
     */
    public static function displayName(): string
    {
        return Craft::t('guide', 'ExportGuideTemplate');
    }

    /**
     * @inheritdoc
     */
    public static function id(): string
    {
        return 'guide-export-guide-template';
    }

    /**
     * @inheritdoc
     */
    public static function iconPath()
    {
        return Craft::getAlias("@wbrowar/guide/assetbundles/exportguidetemplateutility/dist/img/ExportGuideTemplate-icon.svg");
    }

    /**
     * @inheritdoc
     */
    public static function badgeCount(): int
    {
        return 0;
    }

    /**
     * @inheritdoc
     */
    public static function contentHtml(): string
    {
        Craft::$app->getView()->registerAssetBundle(ExportGuideTemplateUtilityAsset::class);

        $someVar = 'Have a nice day!';
        return Craft::$app->getView()->renderTemplate(
            'guide/_components/utilities/ExportGuideTemplate_content',
            [
                'someVar' => $someVar
            ]
        );
    }
}
