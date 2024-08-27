<?php

namespace wbrowar\guide\migrations;

use craft\db\Migration;

/**
 * m240826_225741_add_weight_css_js_markdown migration.
 */
class m240826_225741_add_weight_css_js_markdown extends Migration
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
            $this->addColumn(
                '{{%guide_guides}}',
                'renderMarkdown',
                $this->boolean()->defaultValue(true)->after('contentUrl'),
            );
            $this->addColumn(
                '{{%guide_guides}}',
                'contentCss',
                $this->text(),
            );
            $this->addColumn(
                '{{%guide_guides}}',
                'contentJavascript',
                $this->text(),
            );
            $tablesCreatedForGuides = true;
        }

        /*
         * Add new columns to placements table.
         */
        $placementsTableExists = $this->db->tableExists('{{%guide_placements}}');

        if ($placementsTableExists) {
            $this->addColumn(
                '{{%guide_placements}}',
                'weight',
                $this->integer()->defaultValue(1),
            );
            $this->dropColumn(
                '{{%guide_placements}}',
                'portalMethod',
            );
            $this->dropColumn(
                '{{%guide_placements}}',
                'theme',
            );
            $tablesCreatedForPlacements = true;
        }

        return $tablesCreatedForGuides && $tablesCreatedForPlacements;
    }

    /**
     * @inheritdoc
     */
    public function safeDown(): bool
    {
        echo "m240826_225741_add_weight_css_js_markdown cannot be reverted.\n";
        return false;
    }
}
