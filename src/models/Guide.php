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
     * The Craft user that initially created the guide.
     *
     * @var integer
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
     * When enabled, the Content field will be parsed as Github-flavored markdown.
     *
     * @var boolean
     */
    public $renderMarkdown = true;

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
    public function rules(): array
    {
        return [
            [['authorId', 'slug', 'title'], 'required'],

            ['authorId', 'integer'],
            [['content', 'slug', 'summary', 'title'], 'string'],

            ['authorId', 'default', 'value' => 1],
        ];
    }
}
