<?php

namespace wbrowar\guide\migrations;

use Craft;
use wbrowar\guide\Guide;
use craft\db\Migration;

/**
 * m190703_014806_set_edition migration.
 */
class m190703_014806_set_edition extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        // Don't make the same config changes twice
        $projectConfig = Craft::$app->getProjectConfig();
        $schemaVersion = $projectConfig->get('plugins.guide.schemaVersion', true);
        if (version_compare($schemaVersion, '2.0.0', '>=')) {
            return;
        }

        Craft::$app->getPlugins()->switchEdition('guide', Guide::EDITION_PRO);
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        echo "m190703_014806_set_edition cannot be reverted.\n";
        return false;
    }
}