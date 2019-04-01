<?php

namespace wbrowar\guide\migrations;

use Craft;
use craft\db\Migration;
use wbrowar\guide\Guide;
use wbrowar\guide\models\Navigation;
use wbrowar\guide\records\GuideNavigation;

/**
 * m190331_133206_add_navigation_items_table migration.
 */
class m190331_133206_add_navigation_table extends Migration
{
    /**
     * @var string The database driver to use
     */
    public $driver;

    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->driver = Craft::$app->getConfig()->getDb()->driver;
        if ($this->createTables()) {
            $this->createIndexes();
            // Refresh the db schema caches
            Craft::$app->db->schema->refresh();
        }

        $this->moveNavItems();

        return true;
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        echo "m190331_133206_add_navigation_items_table cannot be reverted.\n";
        return false;
    }

    // Protected Methods
    // =========================================================================

    /**
     * Creates the tables needed for the Records used by the plugin
     *
     * @return bool
     */
    protected function createTables()
    {
        $tablesCreated = false;

        // guide_navigation table
        $tableSchema = Craft::$app->db->schema->getTableSchema('{{%guide_navigation}}');
        if ($tableSchema === null) {
            $tablesCreated = true;
            $this->createTable(
                '{{%guide_navigation}}',
                [
                    'id' => $this->primaryKey(),
                    'dateCreated' => $this->dateTime()->notNull(),
                    'dateUpdated' => $this->dateTime()->notNull(),
                    'uid' => $this->uid(),
                    // Custom columns in the table
                    'links' => $this->text()->notNull(),
                ]
            );
        }

        return $tablesCreated;
    }

    /**
     * Creates the indexes needed for the Records used by the plugin
     *
     * @return void
     */
    protected function createIndexes()
    {
        // guide_navigation table
//        $this->createIndex(
//            null,
//            '{{%guide_navigation}}',
//            'links',
//            false
//        );
    }

    /**
     * Move old navigation from plugin settings over to new table
     *
     * @return void
     */
    protected function moveNavItems()
    {
        $settings = Guide::$plugin->getSettings();

        if ($settings->guideNav ?? false) {
            $settingsNav = $settings->guideNav;
            $navTotal = count($settingsNav);
            $links = [];
            for ($i=0; $i<$navTotal; $i++) {
                $links[] = [
                    'title' => $settingsNav[$i]['title'] ?? 'Title',
                    'slug' => $settingsNav[$i]['id'] ?? 'slug',
                    'templatePath' => $settingsNav[$i]['template'] ?? null,
                    'permissions' => $settingsNav[$i]['permissions'] ?? null,
                    'adminOnly' => !empty($settingsNav[$i]['admin']) ? $settingsNav[$i]['admin'] : 0,
                    'guideId' => $settingsNav[$i]['userGuideId'] ?? null,
                ];
            }

            if (!empty($links)) {
                $record = new GuideNavigation();

                $record->links = $links;

                $record->save();
            }
        }
    }
}
