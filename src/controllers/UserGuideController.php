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

use craft\helpers\DateTimeHelper;
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

        // Remove CSRF token
        $csrfTokenName = Craft::$app->getConfig()->getGeneral()->csrfTokenName;
        if ($params[$csrfTokenName] ?? false) {
            unset($params[$csrfTokenName]);
        }

        return $this->asJson(Guide::$plugin->guide->deleteUserGuide($params));
    }

    /**
     * Handle a request going to our plugin's actionDoSomething URL,
     * e.g.: actions/guide/user-guide-controller/save-user-guide
     *
     * @return mixed
     */
    public function actionDeleteCpUserGuide()
    {
        $this->requirePostRequest();

        $params = Craft::$app->getRequest()->getBodyParams();

        if ($params['id'] ?? false) {
            $userGuideId = $params['id'];
            Guide::$plugin->guide->deleteUserGuide(['id' => $userGuideId]);

            // update Guide CP nav
            $nav = Guide::$plugin->getSettings()->guideNav;
            $navCount = count($nav);

            for ($i=0; $i<$navCount; $i++) {
                if (isset($nav[$i]['userGuideId']) && ($nav[$i]['userGuideId'] == $userGuideId)) {
                    unset($nav[$i]);
                }
            }

            Guide::$plugin->guide->updateGuideCpNav($nav, true);

            return $this->redirectToPostedUrl(true, 'guide/home');
        }
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

        if (($siteId ?? false) && ($sectionId ?? false) && ($typeId ?? false)) {
            $userGuide = Guide::$plugin->guide->getUserGuideForElementType($siteId, $sectionId, $typeId);
        }

        if ($userGuide) {
            $variables = [
                'content' => $userGuide->content,
                'format' => $userGuide->format,
                'userGuide' => $userGuide,
            ];

            return $this->asJson(['guideAsString' => Guide::$plugin->guide->renderUserGuideBody($variables)]);
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

        return $this->asJson(Guide::$plugin->guide->saveUserGuide($userGuide));
    }

    /**
     * Handle a request going to our plugin's actionDoSomething URL,
     * e.g.: actions/guide/user-guide-controller/save-user-guide
     *
     * @return mixed
     */
    public function actionSaveCpUserGuide()
    {
        $this->requirePostRequest();

        $params = Craft::$app->getRequest()->getBodyParams();

        if (($params['content'] ?? false) &&
            ($params['format'] ?? false) &&
            ($params['title'] ?? false) &&
            ($params['slug'] ?? false)) {

            // save user guide
            $userGuide = new UserGuide([
                'authorId' => Craft::$app->getUser()->id,
                'content' => $params['content'],
                'elementType' => 'cp',
                'format' => $params['format'],
                'templatePath' => $params['templatePath'],
            ]);

            $userGuideId = Guide::$plugin->guide->saveUserGuide($userGuide, $params['id'] ?? null);


            // update Guide CP nav
            $nav = Guide::$plugin->getSettings()->guideNav;
            $navCount = count($nav);

            $userGuideInNav = false;
            for ($i=0; $i<$navCount; $i++) {
                if (isset($nav[$i]['userGuideId']) && $nav[$i]['userGuideId'] === $userGuideId) {
                    $userGuideInNav = true;
                    $nav[$i]['id'] = $params['slug'];
                    $nav[$i]['title'] = $params['title'];
                }
            }

            if (!$userGuideInNav) {
                $nav[] = [
                    'userGuideId' => $userGuideId,
                    'id' => $params['slug'],
                    'title' => $params['title'],
                    'templatePath' => $params['templatePath'] ?? '',
                    'permissions' => '',
                    'admin' => '',
                ];
            }

            Guide::$plugin->guide->updateGuideCpNav($nav, true);

            return $this->redirectToPostedUrl(true, 'guide/page/' . $params['slug']);
        }
    }

    /**
     * Handle a request going to our plugin's actionDoSomething URL,
     * e.g.: actions/guide/user-guide-controller/save-user-guide
     *
     * @return mixed
     */
    public function actionSaveWelcomeWidget()
    {
        $this->requirePostRequest();

        $params = Craft::$app->getRequest()->getBodyParams();

        // save welcome widget
        $userGuide = new UserGuide([
            'content' => $params['content'] ?? '',
            'elementType' => 'welcomeWidget',
            'format' => $params['format'],
        ]);

        Guide::$plugin->guide->saveUserGuide($userGuide);

        // save new admin log

        return $this->redirectToPostedUrl(true, 'guide/welcome-widget');
    }

    /**
     * Handle a request going to our plugin's actionDoSomething URL,
     * e.g.: actions/guide/user-guide-controller/save-user-guide
     *
     * @return mixed
     */
    public function actionUpdateAdminsLog()
    {
        $this->requirePostRequest();

        $params = Craft::$app->getRequest()->getBodyParams();

        // save new admin log entry
        if ($params['content'] ?? false) {
            $content = '';

            if ($params['date'] ?? false) {
                $logDate = date('M j, Y', strtotime($params['date']['date']));
                $content .= '## ' . $logDate . "\n\n";
            }

            if ($params['version'] ?? false) {
                $content .= '#### ' . $params['version'] . "\n\n";
            }

            $content .= $params['content'];

            // save welcome widget
            $userGuide = new UserGuide([
                'content' => $content ?? '',
                'elementType' => 'adminsLog',
                'format' => 'markdown',
            ]);

            Guide::$plugin->guide->saveUserGuide($userGuide);
        }

        // delete selected admin log entriesc
        if (($params['deleteLogEntries'] ?? false)) {
            foreach($params['deleteLogEntries'] as $key => $value) {
                if ($value) {
                    Guide::$plugin->guide->deleteUserGuide(['id' => $key]);
                }
            }
        }

        return $this->redirectToPostedUrl(true, 'guide/admins-log');
    }
}
