<?php
/**
 * Guide plugin for Craft CMS 3.x
 *
 * Description
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2017 Will Browar
 */

namespace wbrowar\guide\controllers;

use wbrowar\guide\Guide;

use Craft;
use craft\web\Controller;
use wbrowar\guide\models\UserGuide;
use yii\web\User;

/**
 * Default Controller
 *
 * Generally speaking, controllers are the middlemen between the front end of
 * the CP/website and your plugin’s services. They contain action methods which
 * handle individual tasks.
 *
 * A common pattern used throughout Craft involves a controller action gathering
 * post data, saving it on a model, passing the model off to a service, and then
 * responding to the request appropriately depending on the service method’s response.
 *
 * Action methods begin with the prefix “action”, followed by a description of what
 * the method does (for example, actionSaveIngredient()).
 *
 * https://craftcms.com/docs/plugins/controllers
 *
 * @author    Will Browar
 * @package   Guide
 * @since     1.0.0
 */
class UserGuideController extends Controller
{

    // Protected Properties
    // =========================================================================

    /**
     * @var    bool|array Allows anonymous access to this controller's actions.
     *         The actions must be in 'kebab-case'
     * @access protected
     */
    //protected $allowAnonymous = ['index', 'save-user-guide'];
    protected $allowAnonymous = true;

    // Public Methods
    // =========================================================================

    /**
     * Handle a request going to our plugin's index action URL,
     * e.g.: actions/guide/default
     *
     * @return mixed
     */
    public function actionIndex()
    {
        $result = '';

        return $result;
    }

    /**
     * Handle a request going to our plugin's actionDoSomething URL,
     * e.g.: actions/guide/user-guide-controller/save-user-guide
     *
     * @return mixed
     */
    public function actionDeleteUserGuide()
    {
        $this->requirePostRequest();

        $params = Craft::$app->getRequest()->getBodyParams();

        return $this->asJson(Guide::$plugin->guideService->deleteUserGuide($params));
    }

    /**
     * Handle a request going to our plugin's actionDoSomething URL,
     * e.g.: actions/guide/user-guide-controller/save-user-guide
     *
     * @return mixed
     */
    public function actionGetUserGuideBody()
    {
        $this->requirePostRequest();

        $params = Craft::$app->getRequest()->getBodyParams();

        $siteId = Craft::$app->sites->currentSite->id;
        $sectionId = $params['sectionId'];
        $typeId = $params['typeId'];

        $userGuide = Guide::$plugin->guideService->getUserGuideForElementType($siteId, $sectionId, $typeId);

        if ($userGuide) {
            $variables = [
                'content' => $userGuide->content,
                'format' => $userGuide->format,
                'userGuide' => $userGuide,
            ];

            return $this->asJson(['guideAsString' => Guide::$plugin->guideService->renderUserGuideBody($variables)]);
        }

        return false;
    }

    /**
     * Handle a request going to our plugin's actionDoSomething URL,
     * e.g.: actions/guide/user-guide-controller/save-user-guide
     *
     * @return mixed
     */
    public function actionSaveUserGuide()
    {
        $this->requirePostRequest();

        $params = Craft::$app->getRequest()->getBodyParams();

        $userGuide = new UserGuide([
            'authorId' => $params['authorId'],
            'content' => $params['content'],
            'elementType' => $params['elementType'],
            'format' => $params['format'],
            'moreInfo' => $params['moreInfo'],
            'sectionId' => $params['sectionId'],
            'templatePath' => $params['templatePath'],
            'typeId' => $params['typeId'],
        ]);

        return $this->asJson(Guide::$plugin->guideService->saveUserGuide($userGuide));
    }
}
