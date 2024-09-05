<?php

namespace wbrowar\guide\migrations;

use craft\db\Migration;

/**
 * m240905_040744_add_placement_move_method_column migration.
 */
class m240905_040744_add_placement_move_method_column extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp(): bool
    {
        $tablesCreatedForPlacements = false;

        /*
         * Add new columns to placements table.
         */
        $placementsTableExists = $this->db->tableExists('{{%guide_placements}}');

        if ($placementsTableExists) {
            $this->addColumn(
                '{{%guide_placements}}',
                'moveMethod',
                $this->string(255)->defaultValue('append')->after('groupId'),
            );
            $tablesCreatedForPlacements = true;
        }

        return $tablesCreatedForPlacements;
    }

    /**
     * @inheritdoc
     */
    public function safeDown(): bool
    {
        echo "m240905_040744_add_placement_move_method_column cannot be reverted.\n";
        return false;
    }
}
