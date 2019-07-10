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

use wbrowar\guide\Guide;

use Craft;
use craft\config\DbConfig;
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
            $this->createIndexes();
            $this->addForeignKeys();
            // Refresh the db schema caches
            Craft::$app->db->schema->refresh();
            $this->insertDefaultData();
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
        $tablesCreated = false;

        $tableSchema = Craft::$app->db->schema->getTableSchema('{{%guide_guides}}');
        if ($tableSchema === null) {
            $tablesCreated = true;
            $this->createTable(
                '{{%guide_guides}}',
                [
                    'id' => $this->primaryKey(),
                    'dateCreated' => $this->dateTime()->notNull(),
                    'dateUpdated' => $this->dateTime()->notNull(),
                    'uid' => $this->uid(),
                    'access' => $this->char(11)->notNull(),
                    'authorId' => $this->integer()->notNull(),
                    'format' => $this->char(11)->notNull(),
                    'parentUid' => $this->char(36),
                    'parentType' => $this->char(11),
                    'permissions' => $this->text(),
                    'slug' => $this->char(255)->notNull(),
                    'template' => $this->char(255),
                    'contentSource' => $this->char(255),
                    'contentUrl' => $this->char(255),
                    'title' => $this->char(255)->notNull(),
                    'summary' => $this->char(255),
                    'content' => $this->text(),
                ]
            );
        }

        $tableSchema = Craft::$app->db->schema->getTableSchema('{{%guide_organizers}}');
        if ($tableSchema === null) {
            $tablesCreated = true;
            $this->createTable(
                '{{%guide_organizers}}',
                [
                    'id' => $this->primaryKey(),
                    'dateCreated' => $this->dateTime()->notNull(),
                    'dateUpdated' => $this->dateTime()->notNull(),
                    'uid' => $this->uid(),
                    'cpNav' => $this->text(),
                ]
            );
        }

        return $tablesCreated;
    }

    /**
     * @return void
     */
    protected function createIndexes()
    {
//        $this->createIndex(
//            $this->db->getIndexName(
//                '{{%guide_guides}}',
//                'some_field',
//                true
//            ),
//            '{{%guide_guides}}',
//            'some_field',
//            true
//        );
        // Additional commands depending on the db driver
//        switch ($this->driver) {
//            case DbConfig::DRIVER_MYSQL:
//                break;
//            case DbConfig::DRIVER_PGSQL:
//                break;
//        }

//        $this->createIndex(
//            $this->db->getIndexName(
//                '{{%guide_organizers}}',
//                'some_field',
//                true
//            ),
//            '{{%guide_organizers}}',
//            'some_field',
//            true
//        );
        // Additional commands depending on the db driver
//        switch ($this->driver) {
//            case DbConfig::DRIVER_MYSQL:
//                break;
//            case DbConfig::DRIVER_PGSQL:
//                break;
//        }
    }

    /**
     * @return void
     */
    protected function addForeignKeys()
    {
    }

    /**
     * @return void
     */
    protected function insertDefaultData()
    {
    }

    /**
     * @return void
     */
    protected function removeTables()
    {
        $this->dropTableIfExists('{{%guide_guides}}');

        $this->dropTableIfExists('{{%guide_organizers}}');
    }
}
