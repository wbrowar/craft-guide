<?php
/**
 * Guide plugin for Craft CMS 3.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2019 Will Browar
 */

namespace wbrowar\guide\services;

use craft\elements\Asset;
use wbrowar\guide\Guide;

use Craft;
use craft\base\Component;

/**
 * @author    Will Browar
 * @package   Guide
 * @since     2.0.0
 */
class GuideComponents extends Component
{
    // Public Methods
    // =========================================================================

    /**
     * Gets components and their properties.
     *
     *     Guide::$plugin->guideComponents->getComponentsList()
     *
     * @param $source string The source of the list of components that will be returned
     * @return mixed
     */
    public function getComponentsList(string $source = 'all')
    {
        $list = [];
        $components = [
            'audio' => [
                'name' => 'Audio',
                'description' => 'Play an audio clip from a URL.',
                'code' => [
                    'markdown' => "<div class='guide_c_audio'><audio data-lazy-load data-src=\"REPLACE_URL\" controls></audio></div>",
                    'twig' => "{{ craft.guide.component('audio', { url: 'REPLACE_URL' }) }}",
                ],
            ],
            'button' => [
                'name' => 'Button',
                'description' => 'Direct readers to a URL with simple button.',
                'code' => [
                    'markdown' => "<a class='guide_c_button btn' href=\"REPLACE_URL\">REPLACE_LABEL</a>",
                    'twig' => "{{ craft.guide.component('button', { label: 'REPLACE_LABEL', url: url('REPLACE_URL') }) }}",
                ],
                'options' => [
                    [
                        'handle' => 'label',
                        'required' => true,
                        'type' => 'string',
                        'default' => '',
                        'description' => 'The button label.',
                    ],
                    [
                        'handle' => 'url',
                        'required' => true,
                        'type' => 'string',
                        'default' => '',
                        'description' => 'The button url.',
                    ],
                ]
            ],
            'client_name' => [
                'name' => 'Client Name',
                'description' => 'Variable that represents the "Client Name" setting.',
                'code' => [
                    'markdown' => "[CLIENT_NAME]",
                    'twig' => "{{ craft.guide.var('clientName') }}",
                ],
            ],
            'grid_2_column' => [
                'name' => '2 Column Grid',
                'description' => 'Lay out content in a 2-column grid when the width of the container is 650 pixels or wider.',
                'code' => [
                    'markdown' => "<grid grid-type=\"2-column\">\n  <div>\n    <p>1st column content</p>\n  </div>\n  <div>\n    <p>2nd column content</p>\n  </div>\n</grid>",
                    'twig' => "<grid grid-type=\"2-column\">\n  <div>\n    <p>1st column content</p>\n  </div>\n  <div>\n    <p>2nd column content</p>\n  </div>\n</grid>",
                ],
            ],
            'grid_3_column' => [
                'name' => '3 Column Grid',
                'description' => 'Lay out content in a 3-column grid when the width of the container is 650 pixels or wider.',
                'code' => [
                    'markdown' => "<grid grid-type=\"3-column\">\n  <div>\n    <p>1st column content</p>\n  </div>\n  <div>\n    <p>2nd column content</p>\n  </div>\n  <div>\n    <p>3rd column content</p>\n  </div>\n</grid>",
                    'twig' => "<grid grid-type=\"3-column\">\n  <div>\n    <p>1st column content</p>\n  </div>\n  <div>\n    <p>2nd column content</p>\n  </div>\n  <div>\n    <p>3rd column content</p>\n  </div>\n</grid>",
                ],
            ],
            'grid_4_column' => [
                'name' => '4 Column Grid',
                'description' => 'Lay out content in a 2-column grid when the width of the container is 650 pixels, then into a 4-column grid when the container is 800 pixels or wider.',
                'code' => [
                    'markdown' => "<grid grid-type=\"4-column\">\n  <div>\n    <p>1st column content</p>\n  </div>\n  <div>\n    <p>2nd column content</p>\n  </div>\n  <div>\n    <p>3rd column content</p>\n  </div>\n  <div>\n    <p>4th column content</p>\n  </div>\n</grid>",
                    'twig' => "<grid grid-type=\"4-column\">\n  <div>\n    <p>1st column content</p>\n  </div>\n  <div>\n    <p>2nd column content</p>\n  </div>\n  <div>\n    <p>3rd column content</p>\n  </div>\n  <div>\n    <p>4th column content</p>\n  </div>\n</grid>",
                ],
            ],
            'grid_text_sidebar' => [
                'name' => 'Text/Sidebar Grid',
                'description' => 'Place a wide column of text next to a smaller column.',
                'code' => [
                    'markdown' => "<grid grid-type=\"text-sidebar\">\n  <div>\n    <p>1st column content</p>\n  </div>\n  <div>\n    <p>2nd column content</p>\n  </div>\n</grid>",
                    'twig' => "<grid grid-type=\"text-sidebar\">\n  <div>\n    <p>1st column content</p>\n  </div>\n  <div>\n    <p>2nd column content</p>\n  </div>\n</grid>",
                ],
            ],
            'grid_sidebar_text' => [
                'name' => 'Sidebar/Text Grid',
                'description' => 'Place a wide column of text next to a smaller column, where the smaller column is on the left.',
                'code' => [
                    'markdown' => "<grid grid-type=\"sidebar-text\">\n  <div>\n    <p>1st column content</p>\n  </div>\n  <div>\n    <p>2nd column content</p>\n  </div>\n</grid>",
                    'twig' => "<grid grid-type=\"sidebar-text\">\n  <div>\n    <p>1st column content</p>\n  </div>\n  <div>\n    <p>2nd column content</p>\n  </div>\n</grid>",
                ],
            ],
            'image' => [
                'name' => 'Image',
                'description' => 'Display an image that is not found in your Asset volume.',
                'code' => [
                    'markdown' => "<img src=\"REPLACE_URL\" loading=\"lazy\" alt=\"REPLACE_ALT_TEXT\" />",
                    'twig' => "{{ craft.guide.component('image', { url: 'REPLACE_URL' }) }}",
                ],
            ],
            'include_guide' => [
                'name' => 'Include Guide',
                'description' => 'Display the content of another guide based on the supplied criteria.',
                'code' => [
                    'twig' => "{{ craft.guide.include({ slug: 'REPLACE_SLUG' }) }}",
                ],
            ],
            'markdown' => [
                'name' => 'Markdown',
                'description' => 'Insert an area of markdown to allow for less HTML formatting.',
                'code' => [
                    'twig' => "{% filter md('gfm') %}\n\nContent\n\n{% endfilter %}",
                ],
            ],
            'my_company_name' => [
                'name' => 'My Company Name',
                'description' => 'Variable that represents the "My Company Name" setting.',
                'code' => [
                    'markdown' => "[MY_COMPANY_NAME]",
                    'twig' => "{{ craft.guide.var('myCompanyName') }}",
                ],
            ],
            'table' => [
                'name' => 'Table',
                'description' => 'A simple HTML table.',
                'code' => [
                    'markdown' => "| Table | Header |\n| --- | --- |\n| Table | Content |",
                    'twig' => "<table>\n  <thead>\n    <tr>\n      <th>Table</th>\n      <th>Header</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Table</td>\n      <td>Header</td>\n    </tr>\n  </tbody>\n</table>",
                ],
            ],
            'tip' => [
                'name' => 'Tip Callout',
                'description' => 'A callout for useful information.',
                'code' => [
                    'markdown' => "<div class=\"c_tip\">\n  <div class=\"c_tip__header\">REPLACE_HEADER</div>\n  <div class=\"c_tip__content\">\n    <p>REPLACE_CONTENT</p>\n  </div>\n</div>",
                    'twig' => "<div class=\"c_tip\">\n  <div class=\"c_tip__header\">REPLACE_HEADER</div>\n  <div class=\"c_tip__content\">\n    <p>REPLACE_CONTENT</p>\n  </div>\n</div>",
                ],
            ],
            'video_vimeo' => [
                'name' => 'Vimeo Video',
                'description' => 'Embed a video that is hosted on Vimeo.',
                'code' => [
                    'markdown' => "<div class='guide_c_video'><iframe data-lazy-load data-src=\"https://player.vimeo.com/video/REPLACE_VIDEO_ID?title=0&byline=0&portrait=0\" width=\"500\" height=\"281\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>",
                    'twig' => "{{ craft.guide.component('video', { source: 'vimeo', videoId: 'REPLACE_VIDEO_ID' }) }}",
                ],
            ],
            'video_youtube' => [
                'name' => 'YouTube Video',
                'description' => 'Embed a video that is hosted on YouTube.',
                'code' => [
                    'markdown' => "<div class='guide_c_video'><iframe data-lazy-load data-src=\"https://www.youtube.com/embed/REPLACE_VIDEO_ID?rel=0&amp;controls=1&amp;showinfo=0\" width=\"853\" height=\"480\" frameborder=\"0\" allowfullscreen></iframe></div>",
                    'twig' => "{{ craft.guide.component('video', { source: 'youtube', videoId: 'REPLACE_VIDEO_ID' }) }}",
                ],
            ],
        ];

        switch ($source) {
            case 'settings':
                $settingComponents = Guide::$settings->components;

                foreach ($settingComponents as $key => $item) {
                    if (!empty($item) && !empty($components[$key])) {
                        $list[$key] = $components[$key];
                    }
                }
                break;
        }

        if (empty($list)) {
            $includedDefault = [
                'audio',
                'button',
                'client_name',
                'grid_2_column',
                'grid_3_column',
                'grid_4_column',
                'grid_text_sidebar',
                'grid_sidebar_text',
                'image',
                'include_guide',
                'markdown',
                'my_company_name',
                'table',
                'tip',
                'video_vimeo',
                'video_youtube'
            ];

            foreach ($includedDefault as $item) {
                if (!empty($components[$item])) {
                    $list[$item] = $components[$item];
                }
            }
        }

        return $list;
    }

    /**
     * Gets code for a media asset based on assets uploaded to the volume specified in the assetVolume plugin setting.
     *
     *     Guide::$plugin->guideComponents->getComponentsList()
     *
     * @return mixed
     */
    public function getAssetComponents()
    {
        $list = [];

        if (Guide::$settings->assetVolume ?? false) {
            $assetVolume = Craft::$app->getVolumes()->getVolumeByUid(Guide::$settings->assetVolume);

            if ($assetVolume ?? false) {
                $assets = Asset::find()
                    ->volumeId($assetVolume->id)
                    ->limit(30)
                    ->orderBy('title')
                    ->all();

                if (!empty($assets)) {
                    foreach ($assets as $asset) {
                        if ($asset->kind === 'image') {
                            $thumbnailUrl1x = $asset->getUrl([
                                'mode' => 'crop',
                                'width' => 344,
                                'quality' => 75,
                            ]);
                            $thumbnailUrl2x = $asset->getUrl([
                                'mode' => 'crop',
                                'width' => 688,
                                'quality' => 75,
                            ]);

                            $list[] = [
                                'title' => $asset->title,
                                'group' => 'images',
                                'code' => "{{ craft.guide.component('image', { asset: craft.assets.filename('" . $asset->filename . "').volume('" . $assetVolume->handle . "').one() }) }}",
//                                'documentation' => '<p>Display an image.</p>',
                                'props' => [
                                    'asset' => 'An image asset.',
                                    'url' => 'The URL of the image to be displayed.',
                                ],
                                'thumbnail1x' => $thumbnailUrl1x ?? false,
                                'thumbnail2x' => $thumbnailUrl2x ?? false,
                            ];
                        }
                    }
                }
            }
        }

        return $list;
    }

    /**
     * Renders a component based on supplied parameters.
     *
     *     Guide::$plugin->guideComponents->renderComponent()
     *
     * @param $handle string The name that identifies the component
     * @param $options array Parameters that can be passed into the component to modify the output
     * @return string
     */
    public function renderComponent(string $handle, array $options):string
    {
        if (Guide::$pro) {
            $class = $options['attrs']['class'] ?? [];
            $class[] = 'g-' . $handle;

            $options['attrs'] = $options['attrs'] ?? [];
            $options['attrs']['class'] = $class;
            $options['element'] = $options['element'] ?? 'div';

            if (Craft::$app->getView()->doesTemplateExist('guide/components/' . $handle . '.twig')) {
                return Craft::$app->getView()->renderTemplate('guide/components/' . $handle . '.twig', $options);
            }

            return '<p class="fpo">A component couldn’t be found for this component handle.</p>';
        }

        return '<p class="fpo">Guide Components are available in the PRO edition Guide. Upgrading to PRO will render this component.</p>';
    }
}
