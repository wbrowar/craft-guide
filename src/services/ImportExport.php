<?php
/**
 * Guide plugin for Craft CMS 5.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2019 Will Browar
 */

namespace wbrowar\guide\services;

use Craft;
use craft\base\Component;
use craft\helpers\Json;
use wbrowar\guide\Guide;
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
     * @return string
     */
    public function getGuidesAsJson():string
    {
        $data = [
            'guides' => [],
        ];

        // Add guides to data
        $guides = Guide::$plugin->guide->getGuides();
        foreach ($guides as $guide) {
            $data['guides'][$guide['slug']] = [
                'content' => $guide['content'],
                'contentCss' => $guide['contentCss'],
                'contentJavascript' => $guide['contentJavascript'],
                'contentSource' => $guide['contentSource'],
                'contentUrl' => $guide['contentUrl'],
                'renderMarkdown' => $guide['renderMarkdown'] ? 'true' : 'false',
                'slug' => $guide['slug'],
                'summary' => $guide['summary'],
                'template' => $guide['template'],
                'title' => $guide['title'],
            ];
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
        if (isset($data['slug']) && isset($data['title'])) {
            // Check to see if a guide with this slug already exists
            if(!Guide::$plugin->guide->getGuides([
                'slug' => $data['slug'],
            ], 'count')) {
                $renderMarkdown = Guide::$settings->renderMarkdownDefault;
                if ($data['renderMarkdown'] ?? false) {
                    $renderMarkdown = $data['renderMarkdown'] == 'true';
                }

                $guide = new GuideModel([
                    'authorId' => Craft::$app->getUser()->getIdentity()->id ?? null,
                    'content' => $data['content'] ?? '',
                    'contentCss' => $data['contentCss'] ?? '',
                    'contentJavascript' => $data['contentJavascript'] ?? '',
                    'contentSource' => $data['contentSource'] ?? 'field',
                    'renderMarkdown' => $renderMarkdown,
                    'contentUrl' => $data['contentUrl'] ?? '',
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
