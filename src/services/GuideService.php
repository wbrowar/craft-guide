<?php
/**
 * Guide plugin for Craft CMS 3.x
 *
 * Description
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2017 Will Browar
 */

namespace wbrowar\guide\services;

use craft\helpers\StringHelper;
use function PHPSTORM_META\type;
use wbrowar\guide\Guide;
use wbrowar\guide\models\UserGuide;
use wbrowar\guide\records\UserGuides;

use Craft;
use craft\base\Component;
use craft\web\View;

/**
 * GuideService Service
 *
 * All of your plugin’s business logic should go in services, including saving data,
 * retrieving data, etc. They provide APIs that your controllers, template variables,
 * and other plugins can interact with.
 *
 * https://craftcms.com/docs/plugins/services
 *
 * @author    Will Browar
 * @package   Guide
 * @since     1.0.0
 */
class GuideService extends Component
{
    // Public Methods
    // =========================================================================

    /**
     * Deletes a User Guide based on the supplied parameters.
     *
     *     Guide::$plugin->guide->deleteUserGuide()
     *
     * @return bool
     */
    public function deleteUserGuide($params = [], $queryType = 'one'):bool
    {
        $params['siteId'] = $params['siteId'] ?? Craft::$app->sites->currentSite->id;

        switch ($queryType) {
            case 'all':
                $userGuides = UserGuides::find()->where($params)->all();
                break;
            case 'one':
                $userGuides = UserGuides::find()->where($params)->one();
                break;
            case 'count':
                $userGuides = UserGuides::find()->where($params)->count();
                break;
        }

        if ($userGuides) {
            $userGuides->delete();

            return true;
        }

        return false;
    }

    /**
     * Retrieves a variable saved in the "Guide Variables" section of the
     * Guide plugin settings.
     *
     *     Guide::$plugin->guide->getGuideVariableValue()
     *
     * @return string
     */
    public function getGuideVariableValue($name):string
    {
        $settings = Guide::$plugin->getSettings();
        $value = '';

        switch ($name) {
            case 'FPO':
                $value = '<span class="guide_fpo">FPO</span>';
                break;
            case 'clientName':
                $value = $settings->clientName != '' ? $settings->clientName : '<span class="guide_fpo">CLIENT NAME</span>';
                break;
            case 'myCompanyName':
                $value = $settings->myCompanyName != '' ? $settings->myCompanyName : '<span class="guide_fpo">MY COMPANY NAME</span>';
                break;
        }

        if ($value === '') {
            for ($i=0; $i<count($settings->customVars); $i++) {
                if (($settings->customVars[$i]['varKey'] ?? false) && $settings->customVars[$i]['varKey'] === $name) {
                    if ($settings->customVars[$i]['varType'] === 'password') {
                        $value = StringHelper::decdec($settings->customVars[$i]['varValue']);
                    } else {
                        $value = $settings->customVars[$i]['varValue'];
                    }
                    break;
                }
            }
        }

        return $value;
    }

    /**
     * Gets a User Guide for a Content Guide modal.
     *
     *     Guide::$plugin->guide->getUserGuideForElementType()
     *
     * @return string
     */
    public function getUserGuideForElementType($siteId, $sectionId, $typeId)
    {
        $userGuide = UserGuides::find()->where(['siteId' => $siteId, 'sectionId' => $sectionId, 'typeId' => $typeId])->one();

        return $userGuide ?? null;
    }

    /**
     * Finds User Guides based on the supplied parameters.
     *
     *     Guide::$plugin->guide->getUserGuides()
     *
     * @return UserGuides|array|null
     */
    public function getUserGuides($params = [], $queryType = 'all')
    {
        if ($params['limit'] ?? false) {
            $limit = $params['limit'];
            unset($params['limit']);
        } else {
            $limit = null;
        }

        if ($params['orderBy'] ?? false) {
            $orderBy = $params['orderBy'];
            unset($params['orderBy']);
        } else {
            $orderBy = 'elementType';
        }

        $params['siteId'] = $params['siteId'] ?? Craft::$app->sites->currentSite->id;

        switch ($queryType) {
            case 'all':
                $userGuides = UserGuides::find()->where($params)->limit($limit)->orderBy($orderBy)->all();
                break;
            case 'one':
                $userGuides = UserGuides::find()->where($params)->orderBy($orderBy)->one();
                break;
            case 'count':
                $userGuides = UserGuides::find()->where($params)->count();
                break;
        }

        return $userGuides ?? null;
    }

    /**
     * Renders the content of a User Guide based on the format it was
     * saved with.
     *
     *     Guide::$plugin->guide->renderUserGuideBody()
     *
     * @return string
     */
    public function renderUserGuideBody($params = []):string
    {
        $content = $params['content'];
        $format = $params['format'];
        $userGuide = $params['userGuide'];

        $variables = [
            'content' => $content,
            'format' => $format,
            'userGuide' => $userGuide,
        ];

        if ($format == 'template' && isset($userGuide->templatePath)) {
            $oldMode = Craft::$app->view->getTemplateMode();
            Craft::$app->view->setTemplateMode(View::TEMPLATE_MODE_SITE);
            if (Craft::$app->view->doesTemplateExist($userGuide->templatePath)) {
                $variables['content'] = file_get_contents(Craft::$app->view->resolveTemplate($userGuide->templatePath));
            }
            Craft::$app->view->setTemplateMode($oldMode);
        }

        return Craft::$app->view->renderTemplate('guide/_user_guide/user_guide_body', $variables);
    }

    /**
     * Validates Custom Vars saved in the "Custom Variables" section of the
     * Guide Plugin settings.
     *
     *     Guide::$plugin->guide->prepareCustomVarsForSave()
     *
     * @return string
     */
    public function prepareCustomVarsForSave($settings):array
    {
        $newSettings = [];

        // CUSTOM VARS
        $newVars = [['','','string']];
        if (!empty($settings->customVars)) {
            $newVars = [];
            $vars = $settings->customVars;

            // Validate each variable
            for ($i=0; $i<count($vars); $i++) {
                if (($vars[$i]['varType'] ?? false) && $vars[$i]['varType'] === 'password') {
                    // if the variable is a password, decrypt it
                    $vars[$i]['varValue'] = StringHelper::decdec($vars[$i]['varValue']);
                }

                // add variable to new customVars array
                $newVars[] = $vars[$i];
            }
        }
        $newSettings['customVars'] = $newVars;

        // GUIDE NAV
        $newNav = [];
        if (!empty($settings->guideNav)) {
            $nav = array_values($settings->guideNav);

            // Validate each variable
            for ($i=0; $i<count($nav); $i++) {
                if (isset($nav[$i]['permissions']) && is_array($nav[$i]['permissions'])) {
                    // if the variable is a password, decrypt it
                    $nav[$i]['permissions'] = implode(',', $nav[$i]['permissions']);
                }

                // add variable to new customVars array
                $newNav[] = $nav[$i];
            }
        }
        $newSettings['guideNav'] = $newNav;

        return $newSettings;
    }

    /**
     * Renders a User Guide template.
     *
     *     Guide::$plugin->guide->renderUserGuideTemplate()
     *
     * @return string
     */
    public function renderUserGuideTemplate($templatePath, $entry):string
    {
        $variables = [
            'entry' => $entry,
            'settings' => Guide::$plugin->getSettings(),
        ];

        $siteId = Craft::$app->sites->currentSite->id;
        $sectionId = $entry['sectionId'];
        $typeId = $entry['typeId'];

        if (($siteId ?? false) && ($sectionId ?? false) && ($typeId ?? false)) {
            $userGuide = $this->getUserGuideForElementType($siteId, $sectionId, $typeId);
            if ($userGuide) {
                $variables['userGuide'] = $userGuide;
            } else {
                $variables['userGuide'] = new UserGuide();
            }

            $sectionTypes = Craft::$app->getSections()->getEntryTypesBySectionId($sectionId);

            foreach ($sectionTypes as $item) {
                if ($item->id == $typeId) {
                    $variables['sectionName'] = $item->name;
                }
            }

            $variables['userCanDelete'] = $this->userCanDeleteUserGuides();
            $variables['userCanEdit'] = $this->userCanEditUserGuides();

            return Craft::$app->view->renderTemplate($templatePath, $variables);
        }

        return '';
    }

    /**
     * Saves a User Guide based on the supplied parameters.
     *
     *     Guide::$plugin->guide->saveUserGuide()
     *
     * @return string
     */
    public function saveUserGuide(UserGuide $model, int $id = null):int
    {
        if ($id ?? false) {
            $record = UserGuides::findOne(['id' => $id]);
        } else {
            switch ($model->elementType) {
                case 'entry':
                    $record = UserGuides::findOne(['sectionId' => $model->sectionId, 'siteId' => Craft::$app->sites->currentSite->id, 'typeId' => $model->typeId]);
                    break;
                case 'welcomeWidget':
                    $record = UserGuides::findOne(['elementType' => 'welcomeWidget']);
                    break;
                default:
                    $record = null;
            }
        }

        if (!$record) {
            $record = new UserGuides();
        }

        $record->authorId = $model->authorId;
        $record->content = $model->content;
        $record->elementType = $model->elementType;
        $record->format = $model->format;
        $record->moreInfo = $model->moreInfo;
        $record->sectionId = $model->sectionId;
        $record->templatePath = $model->templatePath;
        $record->typeId = $model->typeId;
        $record->siteId = Craft::$app->sites->currentSite->id;

        $record->save();

        return $record->id;
    }

    /**
     * Updates subnavigation in the Guide CP Section
     *
     *     Guide::$plugin->guide->updateGuideCpNav()
     *
     * @return mixed
     */
    public function updateGuideCpNav($array = [], $force = false):bool
    {
        $newNav = [];
        $settings = Guide::$plugin->getSettings();

        if ($force || empty($settings['guideNav'])) {
            // Process array values
            foreach ($array as $key => $item) {
                // Get template path from item
                if (is_array($item)) {
                    $itemTemplateString = $item['template'] ?? null;
                    $itemAdmin = $item['admin'] ?? false;
                    $itemPermissions = $item['permissions'] ?? [];
                    $itemSlug = $item['id'] ?? StringHelper::toKebabCase($key);
                    $itemTitle = $item['title'] ?? $key;
                    $userGuideId = $item['userGuideId'] ?? null;
                } else if (is_string($item)) {
                    $itemTemplateString = $item;
                    $itemSlug = StringHelper::toKebabCase($key);
                    $itemTitle = $key;
                }

                // Verify that template path file exists
                if (isset($itemTemplateString)) {
                    $oldMode = Craft::$app->view->getTemplateMode();
                    Craft::$app->view->setTemplateMode(View::TEMPLATE_MODE_SITE);
                    if (Craft::$app->view->doesTemplateExist($itemTemplateString)) {
                        $itemTemplate = $itemTemplateString;
                    }
                    Craft::$app->view->setTemplateMode($oldMode);
                }

                // Add navigation item
                if (($itemSlug ?? false) && ($itemTitle ?? false)) {
                    $newNav[$itemSlug] = [
                        'id' => $itemSlug,
                        'title' => $itemTitle,
                    ];

                    if ($itemTemplate ?? false) {
                        $newNav[$itemSlug]['template'] = $itemTemplate;
                    }

                    if ($itemPermissions ?? false) {
                        $newNav[$itemSlug]['permissions'] = $itemPermissions;
                    }

                    if ($itemAdmin ?? false) {
                        $newNav[$itemSlug]['admin'] = $itemAdmin;
                    }

                    if ($userGuideId ?? false) {
                        $newNav[$itemSlug]['userGuideId'] = $userGuideId;
                    }
                }
            }

            // Process custom variables before saving
            $newSettings = Guide::$plugin->guide->prepareCustomVarsForSave($settings);
            $settings['customVars'] = $newSettings['customVars'];

            // Save Guide settings with Updated Nav
            $settings['guideNav'] = array_values($newNav);

            Craft::$app->plugins->savePluginSettings(Guide::$plugin, $settings->toArray());
        }

        return true;
    }

    /**
     * Validates whether or not the logged in user can delete User Guides.
     *
     *     Guide::$plugin->guide->userCanDeleteUserGuides()
     *
     * @return mixed
     */
    public function userCanDeleteUserGuides():bool
    {
        $user = Craft::$app->getUser();

        if ($user->getIsAdmin() || $user->checkPermission('deleteGuides')) {
            return true;
        }

        return false;
    }

    /**
     * Validates whether or not the logged in user can edit User Guides.
     *
     *     Guide::$plugin->guide->userCanEditUserGuides()
     *
     * @return mixed
     */
    public function userCanEditUserGuides():bool
    {
        $setting = Guide::$plugin->settings;
        $user = Craft::$app->getUser();

        if ($setting->userGuidesEditableBy == 'all') {
            return true;
        } else if ($setting->userGuidesEditableBy == 'permission' && $user->checkPermission('editGuides')) {
            return true;
        } else if ($user->getIsAdmin()) {
            return true;
        }

        return false;
    }
}
