<?php

namespace wbrowar\guide\migrations;

use Craft;
use craft\db\Migration;
use craft\db\Query;
use craft\helpers\Json;
use wbrowar\guide\Guide;
use wbrowar\guide\models\Guide as GuideModel;
use wbrowar\guide\records\Guides;

/**
 * m190703_015029_convert_user_guides migration.
 */
class m190703_015029_convert_user_guides extends Migration
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
            if ($this->convertUserGuideToGuide()) {
                $this->removeUserGuideTables();
            }
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
     * @return boolean
     */
    protected function convertUserGuideToGuide()
    {
        // If Guide has done this migration before, return
        $projectConfig = Craft::$app->getProjectConfig();
        $schemaVersion = $projectConfig->get('plugins.guide.schemaVersion', true);
        if (version_compare($schemaVersion, '2.0.0', '>=')) {
            return false;
        }

        // All new guides getting added to the CMS
        $newGuides = [];

        // Get all Guide 1 User Guides
        $userGuideData = (new Query())
            ->select(['id', 'authorId', 'content', 'elementType', 'format', 'sectionId', 'templatePath'])
            ->from(['{{%guide_userguides}}'])
            ->all();

        $userGuides = [];
        foreach ($userGuideData as $item) {
            $userGuides[$item['id']] = $item;
        }

        // Get Guide navigation
        $guideNavigationData = (new Query())
            ->select(['links'])
            ->from(['{{%guide_navigation}}'])
            ->one();

        if ($guideNavigationData['links'] ?? false) {
            $guideNavigation = Json::decodeIfJson($guideNavigationData['links']);

            foreach ($guideNavigation as $item) {
                if ($item['guideId'] ?? false) {
                    if ($userGuides[$item['guideId']]) {
                        $data = $userGuides[$item['guideId']];

                        $newGuides[] = new GuideModel([
                            'title' => $item['title'],
                            'slug' => $item['slug'],
                            'authorId' => $data['authorId'] ?? '0',
                            'content' => $data['content'] ?? '',
                            'contentSource' => 'field',
                            'format' => $data['format'],
                            'summary' => 'Imported from Guide 1',
                        ]);
                    }
                } elseif ($item['templatePath'] ?? false) {
                    $modelParams = [
                        'title' => $item['title'],
                        'slug' => $item['slug'],
                        'authorId' => $data['authorId'] ?? '0',
                        'contentSource' => 'template',
                        'summary' => 'Imported from Guide 1 with template path: ' . $item['templatePath'],
                    ];

                    if (Guide::$settings->templatePath == '_guide/index') {
                        $modelParams['template'] = str_replace('_guide/', '', $item['templatePath']) . '.twig';
                    }

                    $newGuides[] = new GuideModel($modelParams);
                }
            }

            foreach ($newGuides as $model) {
                if ($model->validate()) {
                    $record = new Guides();

                    $record->access = $model->access;
                    $record->authorId = $model->authorId;
                    $record->content = $model->content;
                    $record->contentSource = $model->contentSource;
                    $record->contentUrl = $model->contentUrl;
                    $record->format = $model->format;
                    $record->parentType = $model->parentType;
                    $record->parentUid = $model->parentUid;
                    $record->permissions = $model->permissions;
                    $record->summary = $model->summary;
                    $record->slug = $model->slug;
                    $record->template = $model->template;
                    $record->title = $model->title;

                    $record->save();
                }
            }
        }

        // If Guide Template Path setting was set to default, update it to the new default
        if (Guide::$settings->templatePath == '_guide/index') {
            $newSettings = Guide::$settings;
            $newSettings['templatePath'] = '_guide';
            Guide::$plugin->setSettings(array($newSettings));
        }

        return true;
    }

    /**
     * @return void
     */
    protected function removeUserGuideTables()
    {
        $this->dropTableIfExists('{{%guide_navigation}}');

        $this->dropTableIfExists('{{%guide_userguides}}');
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