<?php

namespace craft\contentmigrations;

use Craft;
use craft\db\Migration;
use craft\helpers\UrlHelper;
use wbrowar\guide\Guide;

/**
 * m220912_002427_3_3_anouncement migration.
 */
class m220912_002427_3_3_anouncement extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp(): bool
    {
        if (version_compare(Guide::$plugin->getVersion(), '3.3', '>=')) {
            Craft::$app->announcements->push(
                function ($language) {
                    return Craft::t('guide', 'Slideout Panel Guides', [], $language);
                },
                function ($language) {
                    return Craft::t('guide', 'Guides can appear in slideout panels on element edit pages. Visit the [Guide Settings]({guideUrl}) page to change the default guide location.', [
                        'guideUrl' => UrlHelper::cpUrl('guide/settings/general'),
                    ], $language);
                },
                'guide'
            );
            Craft::$app->announcements->push(
                function ($language) {
                    return Craft::t('guide', 'Guide Enhanced Image View', [], $language);
                },
                function ($language) {
                    return Craft::t('guide', 'Images in guides can be displayed in high-resolution when clicked. Other content, such as videos or iframe windows, can be displayed in modals using a new Modal Guide component.', [], $language);
                },
                'guide'
            );
        }

        return true;
    }

    /**
     * @inheritdoc
     */
    public function safeDown(): bool
    {
        echo "m220912_002427_3_3_anouncement cannot be reverted.\n";
        return false;
    }
}
