<?php
/**
 * Guide plugin for Craft CMS 3.x
 *
 * Description
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2017 Will Browar
 */

namespace wbrowar\guide\migrations;

use wbrowar\guide\Guide;

use Craft;
use craft\config\DbConfig;
use craft\db\Migration;

/**
 * Guide Install Migration
 *
 * If your plugin needs to create any custom database tables when it gets installed,
 * create a migrations/ folder within your plugin folder, and save an Install.php file
 * within it using the following template:
 *
 * If you need to perform any additional actions on install/uninstall, override the
 * safeUp() and safeDown() methods.
 *
 * @author    Will Browar
 * @package   Guide
 * @since     1.0.0
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
     * This method contains the logic to be executed when applying this migration.
     * This method differs from [[up()]] in that the DB logic implemented here will
     * be enclosed within a DB transaction.
     * Child classes may implement this method instead of [[up()]] if the DB logic
     * needs to be within a transaction.
     *
     * @return boolean return a false value to indicate the migration fails
     * and should not proceed further. All other return values mean the migration succeeds.
     */
    public function safeUp()
    {
        $this->driver = Craft::$app->getConfig()->getDb()->driver;
        if ($this->createTables()) {
            $this->createIndexes();
            $this->addForeignKeys();
            // Refresh the db schema caches
            Craft::$app->db->schema->refresh();
        }

        // guide_userguides table
        $this->dropTableIfExists('{{%guide_guiderecord}}');

        return true;
    }

    /**
     * This method contains the logic to be executed when removing this migration.
     * This method differs from [[down()]] in that the DB logic implemented here will
     * be enclosed within a DB transaction.
     * Child classes may implement this method instead of [[down()]] if the DB logic
     * needs to be within a transaction.
     *
     * @return boolean return a false value to indicate the migration fails
     * and should not proceed further. All other return values mean the migration succeeds.
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
     * Creates the tables needed for the Records used by the plugin
     *
     * @return bool
     */
    protected function createTables()
    {
        $tablesCreated = false;

        // guide_userguides table
        $tableSchema = Craft::$app->db->schema->getTableSchema('{{%guide_userguides}}');
        if ($tableSchema === null) {
            $tablesCreated = true;
            $this->createTable(
                '{{%guide_userguides}}',
                [
                    'id' => $this->primaryKey(),
                    'dateCreated' => $this->dateTime()->notNull(),
                    'dateUpdated' => $this->dateTime()->notNull(),
                    'uid' => $this->uid(),
                    // Custom columns in the table
                    'siteId' => $this->integer()->notNull(),
                    'authorId' => $this->integer()->notNull(),
                    'content' => $this->text(),
                    'elementType' => $this->string(),
                    'format' => $this->string(11)->notNull()->defaultValue(''),
                    'moreInfo' => $this->string(1024),
                    'permissions' => $this->string(512),
                    'sectionId' => $this->integer(),
                    'templatePath' => $this->string(),
                    'typeId' => $this->integer()->notNull(),
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
        // guide_userguides table
        $this->createIndex(
            null,
            '{{%guide_userguides}}',
            'authorId',
            false
        );
        $this->createIndex(
            null,
            '{{%guide_userguides}}',
            'elementType',
            false
        );
        $this->createIndex(
            null,
            '{{%guide_userguides}}',
            'format',
            false
        );
        $this->createIndex(
            null,
            '{{%guide_userguides}}',
            'sectionId',
            false
        );
        $this->createIndex(
            null,
            '{{%guide_userguides}}',
            'typeId',
            false
        );
        $this->createIndex(
            null,
            '{{%guide_userguides}}',
            'templatePath',
            false
        );
    }

    /**
     * Creates the foreign keys needed for the Records used by the plugin
     *
     * @return void
     */
    protected function addForeignKeys()
    {
        // guide_userguides table
        $this->addForeignKey(
            $this->db->getForeignKeyName('{{%guide_userguides}}', 'siteId'),
            '{{%guide_userguides}}',
            'siteId',
            '{{%sites}}',
            'id',
            'CASCADE',
            'CASCADE'
        );
    }

    /**
     * Removes the tables needed for the Records used by the plugin
     *
     * @return void
     */
    protected function removeTables()
    {
        // guide_userguides table
        $this->dropTableIfExists('{{%guide_userguides}}');
    }
}