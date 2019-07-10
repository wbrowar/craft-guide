<?php
/**
 * Guide plugin for Craft CMS 3.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2019 Will Browar
 */

namespace wbrowar\guide\models;

use Craft;
use craft\base\Model;

/**
 * @author    Will Browar
 * @package   Guide
 * @since     2.0.0
 */
class Guide extends Model
{
    // Public Properties
    // =========================================================================

    /**
     * Determines who can access the guide.
     * Options: 'all', 'admins', 'permissions'
     *
     * @var string
     */
    public $access = 'all';

    /**
     * The Craft user that initially created the guide.
     *
     * @var string
     */
    public $authorId;

    /**
     * The raw text of the content of the guide.
     *
     * @var string
     */
    public $content;

    /**
     * Determines how a guide is rendered based on where the content of the guide is stored.
     * Options: 'field', 'iframe', 'template'
     *
     * @var string
     */
    public $contentSource = 'field';

    /**
     * The external URL that is embedded into an iframe for guides using the `iframe` contentSource.
     *
     * @var string
     */
    public $contentUrl;

    /**
     * The programming language of guides that use the `field` or `template` contentSource.
     *
     * @var string
     */
    public $format = 'markdown';

    /**
     * The context in which a guide is displayed within the Craft CP. The default `__none__` means the guide is not displayed anywhere within the CP.
     *
     * @var string
     */
    public $parentType = '__none__';

    /**
     * The UID of a section or category group where a guide will appear in the sidebar of its edit page.
     *
     * @var string
     */
    public $parentUid;

    /**
     * An array of permissions that a user must have to view the guide. The user must have at least one of the permissions in the array.
     *
     * @var string
     */
    public $permissions = [];

    /**
     * The unique slug used in the URL to the guide’s page in the CP.
     *
     * @var string
     */
    public $slug;

    /**
     * A summary that is displayed when a guide is placed in the sidebar of an element edit page.
     * Accepts markdown.
     *
     * @var string
     */
    public $summary;

    /**
     * The filename of the template used as the source of the content for guides with the `template` contentSource.
     *
     * @var string
     */
    public $template;

    /**
     * The title of the guide.
     *
     * @var string
     */
    public $title;

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['access', 'authorId', 'format', 'slug'], 'required'],

            ['authorId', 'integer'],
            [['access', 'content', 'slug', 'summary', 'title'], 'string'],

            ['title', 'required', 'message' => 'Please choose a username.'],

            ['access', 'default', 'value' => 'all'],
            ['authorId', 'default', 'value' => 1],
            ['format', 'default', 'value' => 'markdown'],
            ['parentType', 'default', 'value' => '__none__'],
            ['permissions', 'default', 'value' => []],
        ];
    }

//    public function validateTitle($attribute, $params)
//    {
//        if (empty($this->title)) {
//            $this->addError('title', 'Your salary is not enough for children.');
//        }
//    }
}
