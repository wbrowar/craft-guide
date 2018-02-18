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
     * Updates subnavigation in the Guide CP Section
     *
     * From any other plugin file, call it like this:
     *
     *     Guide::$plugin->guide->saveUserGuide()
     *
     * @return string
     */
    public function deleteUserGuide($params):bool
    {
        $record = UserGuides::findOne(['sectionId' => $params['sectionId'], 'siteId' => Craft::$app->sites->currentSite->id, 'typeId' => $params['typeId']]);

        if ($record) {
            return $record->delete();
        }

        return false;
    }

    /**
     * Updates subnavigation in the Guide CP Section
     *
     * From any other plugin file, call it like this:
     *
     *     Guide::$plugin->guide->getUserGuideForElementType()
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
                if ($settings->customVars[$i]['varKey'] === $name) {
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
     * Updates subnavigation in the Guide CP Section
     *
     * From any other plugin file, call it like this:
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
     * Updates subnavigation in the Guide CP Section
     *
     * From any other plugin file, call it like this:
     *
     *     Guide::$plugin->guide->getUserGuides()
     *
     * @return string
     */
    public function getUserGuides($params = [], $queryType = 'all')
    {
        $orderBy = $params['orderBy'] ?? 'elementType';
        $params['siteId'] = $params['siteId'] ?? Craft::$app->sites->currentSite->id;

        switch ($queryType) {
            case 'all':
                $userGuides = UserGuides::find()->where($params)->orderBy($orderBy)->all();
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
     * Updates subnavigation in the Guide CP Section
     *
     * From any other plugin file, call it like this:
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
            Craft::$app->view->setTemplateMode(View::TEMPLATE_MODE_SITE);
            if (Craft::$app->view->doesTemplateExist($userGuide->templatePath)) {
                $variables['content'] = file_get_contents(Craft::$app->view->resolveTemplate($userGuide->templatePath));
            }
            Craft::$app->view->setTemplateMode(View::TEMPLATE_MODE_CP);
        }

        return Craft::$app->view->renderTemplate('guide/_user_guide/user_guide_body', $variables);
    }

    /**
     * Updates subnavigation in the Guide CP Section
     *
     * From any other plugin file, call it like this:
     *
     *     Guide::$plugin->guide->prepareCustomVarsForSave()
     *
     * @return string
     */
    public function prepareCustomVarsForSave($settings):array
    {
        $newVars = [];

        // Create one empty table row if non are present
        if (empty($settings->customVars)) {
            $newVars = [['','','string']];
        } else {
            $vars = $settings->customVars;

            // Validate each variable
            for ($i=0; $i<count($vars); $i++) {
                if ($vars[$i]['varType'] === 'password') {
                    // if the variable is a password, decrypt it
                    $vars[$i]['varValue'] = StringHelper::decdec($vars[$i]['varValue']);
                }

                // add variable to new customVars array
                $newVars[] = $vars[$i];
            }
        }

        return $newVars;
    }

    /**
     * Updates subnavigation in the Guide CP Section
     *
     * From any other plugin file, call it like this:
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

        $variables['userCanDelete'] = $this->_userCanDeleteUserGuides();
        $variables['userCanEdit'] = $this->_userCanEditUserGuides();

        return Craft::$app->view->renderTemplate($templatePath, $variables);
    }

    /**
     * Updates subnavigation in the Guide CP Section
     *
     * From any other plugin file, call it like this:
     *
     *     Guide::$plugin->guide->saveUserGuide()
     *
     * @return string
     */
    public function saveUserGuide(UserGuide $model):bool
    {
        $record = UserGuides::findOne(['sectionId' => $model->sectionId, 'siteId' => Craft::$app->sites->currentSite->id, 'typeId' => $model->typeId]);

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

        return true;
    }

    /**
     * Updates subnavigation in the Guide CP Section
     *
     * From any other plugin file, call it like this:
     *
     *     Guide::$plugin->guide->exampleService()
     *
     * @return mixed
     */
    public function updateGuideCpNav($array = []):bool
    {
        $newNav = [];
        $settings = Guide::$plugin->getSettings();

        // Process array values
        foreach ($array as $key => $item) {
            $itemKey = StringHelper::toKebabCase($key);
            $itemTitle = $key;

            // Get template path from item
            if (is_array($item)) {
                $itemTemplateString = $item['template'] ?? null;
                $itemAdmin = $item['admin'] ?? false;
                $itemPermissions = $item['permissions'] ?? [];
            } else if (is_string($item)) {
                $itemTemplateString = $item;
            }

            // Verify that template path file exists
            if (isset($itemTemplateString)) {
                Craft::$app->view->setTemplateMode(View::TEMPLATE_MODE_SITE);
                if (Craft::$app->view->doesTemplateExist($itemTemplateString)) {
                    $itemTemplate = $itemTemplateString;
                }
                Craft::$app->view->setTemplateMode(View::TEMPLATE_MODE_CP);
            }

            // Add navigation item
            if (($itemKey ?? false) && ($itemTitle ?? false) && ($itemTemplate ?? false)) {
                $newNav[$itemKey] = [
                    'id' => $itemKey,
                    'title' => $itemTitle,
                    'template' => $itemTemplate,
                ];

                if ($itemAdmin ?? false) {
                    $newNav[$itemKey]['admin'] = $itemAdmin;
                }

                if ($itemPermissions ?? false) {
                    $newNav[$itemKey]['permissions'] = $itemPermissions;
                }
            }
        }

        // Process custom variables before saving
        $settings['customVars'] = Guide::$plugin->guide->prepareCustomVarsForSave($settings);

        // Save Guide settings with Updated Nav
        $settings['guideNav'] = $newNav;
        Craft::$app->plugins->savePluginSettings(Guide::$plugin, $settings->toArray());

        return true;
    }

    // Private Methods
    // =========================================================================

    /**
     * Updates subnavigation in the Guide CP Section
     *
     * From any other plugin file, call it like this:
     *
     *     Guide::$plugin->guide->exampleService()
     *
     * @return mixed
     */
    private function _userCanDeleteUserGuides():bool
    {
        $user = Craft::$app->getUser();

        if ($user->getIsAdmin() || $user->checkPermission('deleteGuides')) {
            return true;
        }

        return false;
    }

    /**
     * Updates subnavigation in the Guide CP Section
     *
     * From any other plugin file, call it like this:
     *
     *     Guide::$plugin->guide->exampleService()
     *
     * @return mixed
     */
    private function _userCanEditUserGuides():bool
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
