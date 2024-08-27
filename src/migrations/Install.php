<?php
/**
 * Guide plugin for Craft CMS 3.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2019 Will Browar
 */

namespace wbrowar\guide\migrations;

use Craft;
use craft\db\Migration;

/**
 * @author    Will Browar
 * @package   Guide
 * @since     2.0.0
 */
class Install extends Migration
{
    // Public Properties
    // =========================================================================

    /**
     * @var string The database driver to use
     */
    public $driver;

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->driver = Craft::$app->getConfig()->getDb()->driver;
        if ($this->createTables()) {
            // Refresh the db schema caches
            Craft::$app->db->schema->refresh();
        }

        return true;
    }

   /**
     * @inheritdoc
     */
    public function safeDown()
    {
        $this->driver = Craft::$app->getConfig()->getDb()->driver;
        $this->removeTables();

        return true;
    }

    // Protected Methods
    // =========================================================================

    /**
     * @return bool
     */
    protected function createTables()
    {
        $tablesCreatedForGuides = false;
        $tablesCreatedForPlacements = false;

        // TODO add contentJavascript, contentSource, renderMarkdown
        $tableSchema = Craft::$app->db->schema->getTableSchema('{{%guide_guides}}');
        if ($tableSchema === null) {
            $tablesCreatedForGuides = true;
            $this->createTable(
                '{{%guide_guides}}',
                [
                    'id' => $this->primaryKey(),
                    'dateCreated' => $this->dateTime()->notNull(),
                    'dateUpdated' => $this->dateTime()->notNull(),
                    'uid' => $this->uid(),
                    'authorId' => $this->integer()->notNull(),
                    'slug' => $this->string(255)->notNull(),
                    'template' => $this->string(255),
                    'contentSource' => $this->string(255),
                    'contentUrl' => $this->string(255),
                    'renderMarkdown' => $this->boolean()->defaultValue(false),
                    'title' => $this->string(255)->notNull(),
                    'summary' => $this->string(255),
                    'content' => $this->text(),
                    'contentCss' => $this->text(),
                    'contentJavascript' => $this->text(),
                ]
            );
        }

        // TODO add weight
        // TODO remove portalMethod, theme
        $tableSchema = Craft::$app->db->schema->getTableSchema('{{%guide_placements}}');
        if ($tableSchema === null) {
            $tablesCreatedForPlacements = true;
            $this->createTable(
                '{{%guide_placements}}',
                [
                    'id' => $this->primaryKey(),
                    'dateCreated' => $this->dateTime()->notNull(),
                    'dateUpdated' => $this->dateTime()->notNull(),
                    'uid' => $this->uid(),
                    'guideId' => $this->integer()->notNull(),
                    'access' => $this->string(255),
                    'group' => $this->string(255),
                    'groupId' => $this->string(255),
                    'selector' => $this->string(255),
                    'uri' => $this->string(255),
                    'weight' => $this->integer()->defaultValue(1),
                ]
            );
        }

        return $tablesCreatedForGuides && $tablesCreatedForPlacements;
    }

    /**
     * @return void
     */
    protected function removeTables()
    {
        $this->dropTableIfExists('{{%guide_guides}}');

        $this->dropTableIfExists('{{%guide_placements}}');
    }
}
