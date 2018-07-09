<?php
/**
 * Guide plugin for Craft CMS 3.x
 *
 * Description
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2017 Will Browar
 */

/**
 * Guide config.php
 *
 * This file exists only as a template for the Guide settings.
 * It does nothing on its own.
 *
 * Don't edit this file, instead copy it to 'craft/config' as 'guide.php'
 * and make your changes there to override default settings.
 *
 * Once copied to 'craft/config', this file will be multi-environment aware as
 * well, so you can have different settings groups for each environment, just as
 * you do for 'general.php'
 *
 * For descriptions of each parameter,
 * look in \wbrowar\guide\modals\Settings.php
 */

return [
    'customCss' => '',
    'customVars' => [],
    'emailSupportContacts' => [],
    'enableAllUserGuides' => true,
    'enableAllEmailSupport' => true,
    'enableAllWelcomeWidget' => true,
    'enableAllWebsiteUpdates' => true,
    'enableEmailSupportForm' => true,
    '$guideNav' => [],
    'guideTemplatePath' => '_guide/index',
    'userGuidesEditableBy' => 'admin',
    'clientName' => '',
    'myCompanyName' => '',
];