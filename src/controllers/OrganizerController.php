<?php
/**
 * Guide plugin for Craft CMS 3.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2019 Will Browar
 */

namespace wbrowar\guide\controllers;

use wbrowar\guide\Guide;

use Craft;
use craft\web\Controller;
use wbrowar\guide\models\Organizer as OrganizerModel;

/**
 * @author    Will Browar
 * @package   Guide
 * @since     2.0.0
 */
class OrganizerController extends Controller
{

    // Protected Properties
    // =========================================================================

    /**
     * @var    bool|array Allows anonymous access to this controller's actions.
     *         The actions must be in 'kebab-case'
     * @access protected
     */
//    protected $allowAnonymous = ['index', 'do-something'];

    // Public Methods
    // =========================================================================

    /**
     * @return mixed
     */
    public function actionIndex()
    {
        return null;
    }

    /**
     * Saves Guide CP navigation for site.
     *
     * @return mixed
     */
    public function actionSave()
    {
        $params = Craft::$app->getRequest()->getBodyParams();
        $results = [
            'status' => 'error',
            'error' => '',
        ];

        $loadedOrganizer = Guide::$plugin->organizer->getOrganizer();

        $organizer = new OrganizerModel([
            'cpNav' => $params['cpNav'] ?? [],
        ]);

        if ($organizer->validate()) {
            if ($loadedOrganizer ?? false) {
                $id = $loadedOrganizer->id;
            } else {
                $id = ($params['id'] ?? false) ? $params['id'] : null;
            }
            $saved = Guide::$plugin->organizer->saveOrganizer($organizer, $id);

            if ($saved) {
                $results['status'] = 'success';
            } else {
                $results['error'] = 'Couldn’t save Organizer.';
            }
        } else {
            $results['error'] = 'Couldn’t save Organizer. Invalid data.';
        }

        return $this->asJson($results);
    }
}
