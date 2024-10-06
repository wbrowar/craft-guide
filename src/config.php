<?php
/**
 * Guide plugin for Craft CMS 5.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2024 Will Browar
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
 */

return [
    // An asset volume where Guide will look for images.
    'assetVolume' => '',

    // The location of guides when displayed on element edit pages.
    'editPageLocation' => 'slideout',

    // Enable CSS and JavaScript fields to appear in the Guide Editor.
    'enableGuideCss' => true,
    'enableGuideJavascript' => false,

    // Enable CSS and JavaScript to be displayed on the page.
    // NOTE: These settings will be ignored if their respective field is disabled.
    'registerGuideCss' => true,
    'registerGuideJavascript' => true,

    // Enables non-essential visual enhancements.
    'fun' => true,

    // The label shown on Guide Buttons on edit pages.
    'guideButtonLabel' => '',

    // Path to Guide CP Section templates.
    'renderMarkdownDefault' => true,

    // A path inside the templates directory where Guide will look for templates.
    'templatePath' => '',

    // Twig variables that can be used across all guides.
    'clientName' => '',
    'projectName' => '',
    'myCompanyName' => '',
];
