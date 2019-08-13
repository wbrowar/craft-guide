<?php
/**
 * Guide plugin for Craft CMS 3.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2019 Will Browar
 */

namespace wbrowar\guide\services;

use craft\helpers\Json;
use wbrowar\guide\Guide;

use Craft;
use craft\base\Component;
use wbrowar\guide\models\Guide as GuideModel;

/**
 * @author    Will Browar
 * @package   Guide
 * @since     2.0.0
 */
class ImportExport extends Component
{
    // Public Methods
    // =========================================================================

    /**
     * Gets components and their properties.
     *
     *     Guide::$plugin->importExport->getGuidesAsJson()
     *
     * @return mixed
     */
    public function getGuidesAsJson():string
    {
        $data = [
            'guides' => [],
            'cpNav' => [],
        ];
        $guideSlugs = [];

        // Add guides to data
        $guides = Guide::$plugin->guide->getGuides();
        foreach ($guides as $guide) {
            $data['guides'][] = [
                'access' => $guide['access'],
                'content' => $guide['content'],
                'contentSource' => $guide['contentSource'],
                'contentUrl' => $guide['contentUrl'],
                'format' => $guide['format'],
                'parentType' => $guide['parentType'],
                'parentUid' => $guide['parentUid'],
                'slug' => $guide['slug'],
                'title' => $guide['title'],
                'template' => $guide['template'],
                'summary' => $guide['summary'],
            ];
            
            // Record slugs for later
            $guideSlugs[$guide['id']] = $guide['slug'];
        }
        
        // Add CP section navigation from organizer data
        $organizer = Guide::$plugin->organizer->getOrganizer();
        if ($organizer['cpNav'] ?? false) {
            // Convert IDs to slugs
            // Get CP nav as IDs
            $cpNavIds = Json::decodeIfJson($organizer['cpNav']);
            foreach ($cpNavIds as $id) {
                if ($guideSlugs[intval($id)] ?? false) {
                    $data['cpNav'][] = $guideSlugs[intval($id)];
                }
            }
        }

        return Json::encode($data);
    }

    /**
     * Imports a guide from a JSON object
     *
     *     Guide::$plugin->importExport->importGuide()
     *
     * @param $data array Values to be imported into a new guide
     * @return int|bool
     */
    public function importGuideData($data)
    {
        if ($data['slug'] ?? false && $data['title'] ?? false) {
            // Check to see if a guide with this slug already exists
            if(!Guide::$plugin->guide->getGuides([
                'slug' => $data['slug'],
            ], 'count')) {
                $guide = new GuideModel([
                    'access' => $data['access'] ?? 'all',
                    'authorId' => Craft::$app->getUser()->getIdentity()->id ?? null,
                    'content' => $data['content'] ?? '',
                    'contentSource' => $data['contentSource'] ?? 'template',
                    'contentUrl' => $data['contentUrl'] ?? '',
                    'format' => $data['format'] ?? 'markdown',
                    'parentType' => $data['parentType'] ?? '',
                    'parentUid' => $data['parentUid'] ?? '',
                    'slug' => $data['slug'],
                    'summary' => $data['summary'] ?? '',
                    'template' => $data['template'] ?? '',
                    'title' => $data['title'],
                ]);

                if ($guide->validate()) {
                    $saved = Guide::$plugin->guide->saveGuide($guide, null);

                    if ($saved) {
                        return $saved;
                    }
                }
            }
        }

        return false;
    }
}
