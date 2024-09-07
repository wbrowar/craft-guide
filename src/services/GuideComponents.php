<?php
/**
 * Guide plugin for Craft CMS 5.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2019 Will Browar
 */

namespace wbrowar\guide\services;

use Craft;
use craft\base\Component;
use craft\elements\Asset;
use wbrowar\guide\Guide;

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
     * Gets code for a media asset based on assets uploaded to the volume specified in the assetVolume plugin setting.
     *
     *     Guide::$plugin->guideComponents->getAssetComponents()
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
                                'contentCode' => "{{ craft.guide.component('image', { asset: craft.assets.filename('" . $asset->filename . "').volume('" . $assetVolume->handle . "').one() }) }}",
                                'props' => [
                                    'asset' => 'An image asset.',
                                ],
                                'thumbnail1x' => $thumbnailUrl1x ?? false,
                                'thumbnail2x' => $thumbnailUrl2x ?? false,
                                'summary' => $asset->alt ?? null
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
            $class[] = 'guide-component';
            $class[] = 'guide-component-' . $handle;

            $options['attrs'] = $options['attrs'] ?? [];
            $options['attrs']['class'] = $class;
            $options['element'] = $options['element'] ?? 'div';

            $oldMode = Guide::$view->getTemplateMode();
            Guide::$view->setTemplateMode(Guide::$view::TEMPLATE_MODE_CP);
            if (Craft::$app->getView()->doesTemplateExist('guide/components/' . $handle . '.twig')) {
                $renderedTemplate = Craft::$app->getView()->renderTemplate('guide/components/' . $handle . '.twig', $options);
            }
            Guide::$view->setTemplateMode($oldMode);

            return $renderedTemplate ?? '<p class="fpo">A component couldn’t be found for this component handle: ' . $handle . '</p>';
        }

        return '<p class="fpo">Guide Components are available in the PRO edition Guide. Upgrading to PRO will render this component.</p>';
    }
}
