<?php

namespace wbrowar\guide\migrations;

use Craft;
use craft\db\Migration;

/**
 * m210729_002113_version_2_to_3 migration.
 */
class m210729_002113_version_2_to_3 extends Migration
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
            $this->removeColumns();
            $this->removeTables();
        }
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        echo "m210729_002113_version_2_to_3 cannot be reverted.\n";
        return false;
    }

    /**
     * @return bool
     */
    protected function createTables():bool
    {
        $tablesCreated = false;

        $tableSchema = Craft::$app->db->schema->getTableSchema('{{%guide_placements}}');
        if ($tableSchema === null) {
            $tablesCreated = true;
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
                    'portalMethod' => $this->string(255),
                    'selector' => $this->string(255),
                    'uri' => $this->string(255),
                ]
            );
        }

        return $tablesCreated;
    }

    /**
     * @return void
     */
    protected function removeColumns()
    {
        // Remove deprecated Guide columns
        $this->dropColumn('{{%guide_guides}}', 'access');
        $this->dropColumn('{{%guide_guides}}', 'format');
        $this->dropColumn('{{%guide_guides}}', 'parentUid');
        $this->dropColumn('{{%guide_guides}}', 'parentType');
        $this->dropColumn('{{%guide_guides}}', 'permissions');
    }

    /**
     * @return void
     */
    protected function removeTables()
    {
        // Remove Placement Table
        $this->dropTableIfExists('{{%guide_organizers}}');
    }
}
