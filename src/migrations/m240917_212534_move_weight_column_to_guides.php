<?php

namespace wbrowar\guide\migrations;

use Craft;
use craft\db\Migration;

/**
 * m240917_212534_move_weight_column_to_guides migration.
 */
class m240917_212534_move_weight_column_to_guides extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp(): bool
    {
        $tablesCreatedForGuides = false;
        $tablesCreatedForPlacements = false;

        /*
         * Add new columns to guides table.
         */
        $guideTableExists = $this->db->tableExists('{{%guide_guides}}');

        if ($guideTableExists) {
            if (!$this->db->columnExists('{{%guide_guides}}', 'weight')) {
                $this->addColumn(
                    '{{%guide_guides}}',
                    'weight',
                    $this->integer()->defaultValue(1),
                );
            }
            $tablesCreatedForGuides = true;
        }

        /*
         * Add new columns to placements table.
         */
        $placementsTableExists = $this->db->tableExists('{{%guide_placements}}');

        if ($placementsTableExists) {
            if ($this->db->columnExists('{{%guide_placements}}', 'weight')) {
                $this->dropColumn(
                    '{{%guide_placements}}',
                    'weight',
                );
            }
            $tablesCreatedForPlacements = true;
        }

        return $tablesCreatedForGuides && $tablesCreatedForPlacements;
    }

    /**
     * @inheritdoc
     */
    public function safeDown(): bool
    {
        echo "m240917_212534_move_weight_column_to_guides cannot be reverted.\n";
        return false;
    }
}
