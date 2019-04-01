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

use craft\helpers\Json;
use wbrowar\guide\Guide;
use wbrowar\guide\models\Navigation;
use wbrowar\guide\models\UserGuide;

use Craft;
use craft\helpers\Template;
use yii\helpers\Markdown;
use craft\mail\Message;
use craft\web\Controller;

/**
 * User Guide Controller
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
     * Deletes a User Guide based on the supplied parameters.
     * Returns 'true' or 'false' as JSON.
     *
     *      actions/guide/user-guide-controller/save-user-guide
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
     * Deletes a CP User Guide and updates the Guide CP Navigation.
     *
     *      actions/guide/user-guide-controller/delete-cp-user-guide
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
            $nav = Guide::$plugin->guide->getCpNavigation();
            $navLinks = $nav->links;
            $navCount = count($navLinks);
            $navChanged = false;

            for ($i=0; $i<$navCount; $i++) {
                if (isset($navLinks[$i]['guideId']) && ($navLinks[$i]['guideId'] == $userGuideId)) {
                    array_splice($navLinks, $i, 1);
                    $navChanged = true;
                }
            }

            if ($navChanged) {
                $nav->links = $navLinks;
                Guide::$plugin->guide->saveCpNavigation($nav);
            }

            return $this->redirectToPostedUrl(true, 'guide/home');
        }
    }

    /**
     * Gets the body of a User Guide.
     * Used when Content Guides are updated to refresh the preview on the page.
     *
     *      actions/guide/user-guide-controller/get-user-guide-body
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
     *
     *      actions/guide/user-guide-controller/save-cp-navigation
     *
     * @return mixed
     */
    public function actionSaveCpNavigation()
    {
        $this->requirePostRequest();

        $params = Craft::$app->getRequest()->getBodyParams();

        $navigation = new Navigation([
            'links' => $params['links'],
        ]);

        Guide::$plugin->guide->saveCpNavigation($navigation);

        return $this->redirectToPostedUrl(true );
    }

    /**
     * Saves a User Guide based on the supplied parameters.
     * Returns 'true' or 'false' as JSON.
     *
     *      actions/guide/user-guide-controller/save-user-guide
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
     * Deletes a CP User Guide and updates the Guide CP Navigation.
     *
     *      actions/guide/user-guide-controller/save-user-guide
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


            // Update Guide CP nav
            $nav = Guide::$plugin->guide->getCpNavigation();
            $navLinks = $nav->links;
            $navCount = count($navLinks);

            $userGuideInNav = false;
            for ($i=0; $i<$navCount; $i++) {
                if (isset($navLinks[$i]['guideId']) && $navLinks[$i]['guideId'] === $userGuideId) {
                    $userGuideInNav = true;
                    $navLinks[$i]['slug'] = $params['slug'];
                    $navLinks[$i]['title'] = $params['title'];
                }
            }

            if (!$userGuideInNav) {
                $navLinks[] = [
                    'guideId' => $userGuideId,
                    'slug' => $params['slug'],
                    'title' => $params['title'],
                    'templatePath' => $params['templatePath'] ?? '',
                    'permissions' => '',
                    'adminOnly' => '',
                ];
            }

            $nav->links = $navLinks;
            Guide::$plugin->guide->saveCpNavigation($nav);

            return $this->redirectToPostedUrl(true, 'guide/page/' . $params['slug']);
        }
    }

    /**
     * Saves the Welcome Widget User Guide from the Welcome Widget CP page.
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
     * Sends the email message from the Email Support widget.
     *
     * @return mixed
     */
    public function actionSendEmailSupportEmail()
    {
        $this->requirePostRequest();

        $params = Craft::$app->getRequest()->getBodyParams();

        $results = [
            'status' => 'error',
            'message' => 'DATA_NOT_VALID',
        ];

        if (($params['contactEmail'] ?? false) && ($params['details'] ?? false)) {
            // set defaults
            $contactEmail = ($params['contactEmail'] != 'system') ? $params['contactEmail'] : Craft::$app->systemSettings->getSettings('email')['fromEmail'];
            $sendDetails = $params['details'] == 'true';
            $siteName = Craft::$app->getSites()->getCurrentSite()->name ?? 'Craft CMS Website';
            $timestamp = date("F j, Y, g:i a");
            $userEmail = Craft::$app->getUser()->getIdentity()->email;
            $userFriendlyName = Craft::$app->getUser()->getIdentity()->friendlyName;

            // prepare mail message
            $emailMessage = "<h2>Email Support Message from " . $siteName . "</h2>"
                            ."<p><b>Date:</b> " . $timestamp . "<br>"
                            ."<b>User:</b> " . $userFriendlyName . " (<a href='mailto:" . $userEmail . "'>" . $userEmail . "</a>)</p>";

            if ($params['message'] ?? false) {
                $emailMessage .= '<hr><h3>Message</h3>' . Template::raw(Markdown::process($params['message'])) . '<br>';
            }

            if ($sendDetails) {

                // start table
                $emailMessage .= "<hr><h3>Support Details</h3><table width='100%'><tbody>";

                // system info
                $emailMessage .= "<tr><td width='30%' style='border-bottom: 1px solid lightgrey'><br><b>SYSTEM INFO</b></td><td style='border-bottom: 1px solid lightgrey'>&nbsp;</td></tr>"
                    ."<tr><td><b>Edition</b></td><td>" . Craft::$app->getEditionName() . "</td></tr>"
                    ."<tr><td><b>Craft Environment</b></td><td>" . CRAFT_ENVIRONMENT . "</td></tr>"
                    ."<tr><td><b>System On</b></td><td>" . (Craft::$app->getIsSystemOn() ? 'YES' : 'NO') . "</td></tr>"
                    ."<tr><td><b>Dev Mode</b></td><td>" . (Craft::$app->getConfig()->getGeneral()->devMode ? 'YES' : 'NO') . "</td></tr>";

                $emailMessage .= "<tr><td width='30%' style='border-bottom: 1px solid lightgrey'><br><br><b>REQUEST INFO</b></td><td style='border-bottom: 1px solid lightgrey'>&nbsp;</td></tr>"
                    ."<tr><td><b>OS</b></td><td>" . Craft::$app->getRequest()->getClientOs() . "</td></tr>"
                    ."<tr><td><b>User Agent</b></td><td>" . Craft::$app->getRequest()->getUserAgent() . "</td></tr>"
                    ."<tr><td><b>User IP</b></td><td>" . Craft::$app->getRequest()->getUserIP() . "</td></tr>";

                $emailMessage .= "<tr><td width='30%' style='border-bottom: 1px solid lightgrey'><br><br><b>BROWSER INFO</b></td><td style='border-bottom: 1px solid lightgrey'>&nbsp;</td></tr>";

                foreach ($params['browserInfo'] as $key => $item) {
                    $emailMessage .= "<tr><td><b>" . $key . "</b></td><td>" . $item . "</td></tr>";
                }

                $plugins = Craft::$app->getPlugins()->getAllPlugins();

                if ($plugins ?? false) {
                    $emailMessage .= "<tr><td width='30%' style='border-bottom: 1px solid lightgrey'><br><br><b>PLUGINS</b></td><td style='border-bottom: 1px solid lightgrey'>&nbsp;</td></tr>";

                    foreach ($plugins as $item) {
                        $emailMessage .= "<tr><td>&nbsp;</td><td>" . $item->name . "</td></tr>";
                    }
                }

                // close table
                $emailMessage .= "</tbody></table>";
            }

            $emailSubject = "Email Support Message from " . $siteName;

            // setup mail message
            $message = new Message();

            $message->setFrom([$userEmail => $userFriendlyName]);
            $message->setTo($contactEmail);
            $message->setSubject($emailSubject);
            $message->setHtmlBody($emailMessage);

            if (Craft::$app->mailer->send($message)) {
                $results = [
                    'status' => 'success',
                    'message' => 'EMAIL_SENT',
                ];
            }
        }

        // save new admin log
        return $this->asJson($results);
    }

    /**
     * Updates Website Updates data from the Website Updates CP page.
     * This can add a new log entry, and/or delete existing entries.
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

        return $this->redirectToPostedUrl(true, 'guide/website-updates');
    }
}
