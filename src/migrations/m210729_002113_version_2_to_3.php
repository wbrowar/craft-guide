<?php

namespace wbrowar\guide\migrations;

use Craft;
use craft\db\Migration;

/**
 * m210729_002113_version_2_to_3 migration.
 */
class m210729_002113_version_2_to_3 extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->driver = Craft::$app->getConfig()->getDb()->driver;
        if ($this->createTables()) {

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
     * @return void
     */
    protected function createTables()
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
                    'cpNav' => $this->text(),
                ]
            );
        }

        return $tablesCreated;
    }

    /**
     * @return void
     */
    protected function removeTables()
    {
        // Remove Organizers
//        $this->dropTableIfExists('{{%guide_organizers}}');
    }
}
