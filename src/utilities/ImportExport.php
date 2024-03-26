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

use Craft;
use craft\base\Utility;

/**
 * Guide Utility
 *
 * @author    Will Browar
 * @package   Guide
 * @since     2.0.0
 */
class ImportExport extends Utility
{
    // Static
    // =========================================================================

    /**
     * @inheritdoc
     */
    public static function displayName(): string
    {
        return Craft::t('guide', 'Guide');
    }

    /**
     * @inheritdoc
     */
    public static function id(): string
    {
        return 'guide-export-import';
    }

    /**
     * @inheritdoc
     */
    public static function icon(): ?string
    {
        return Craft::getAlias('@wbrowar/guide/assetbundles/static/icon-mask.svg');
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
//        Craft::$app->getView()->registerAssetBundle(ExportGuideTemplateUtilityAsset::class);

        return Craft::$app->getView()->renderTemplate(
            'guide/utilities/export-import',
            [
                'guidesJson' => Guide::$plugin->importExport->getGuidesAsJson(),
                'proEdition' => Guide::$pro,
                'settings' => Guide::$settings,
            ]
        );
    }
}
