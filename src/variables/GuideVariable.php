<?php
/**
 * Guide plugin for Craft CMS 3.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2019 Will Browar
 */

namespace wbrowar\guide\variables;

use craft\helpers\Html;
use craft\helpers\Template;
use wbrowar\guide\Guide;

use Craft;

/**
 * @author    Will Browar
 * @package   Guide
 * @since     2.0.0
 */
class GuideVariable
{
    // Public Methods
    // =========================================================================

    /**
     * @return mixed
     */
    public function component($handle, $options = [])
    {
        return Template::raw(Guide::$plugin->guideComponents->renderComponent($handle, $options));
    }

    /**
     * @return mixed
     */
    public function getAll($params = [], $queryType = 'all')
    {
        return Guide::$plugin->guide->getGuides($params, $queryType);
    }

    /**
     * @return mixed
     */
    public function getOne($params = [])
    {
        return Guide::$plugin->guide->getGuides($params, 'one');
    }

    /**
     * @return string
     */
    public function include($params = []): string
    {
        $guide = Guide::$plugin->guide->getGuides($params, 'one');

        if ($guide && in_array($guide->contentSource, ['field', 'template'])) {
            $oldMode = Guide::$view->getTemplateMode();
            Guide::$view->setTemplateMode(Guide::$view::TEMPLATE_MODE_CP);
            $renderedTemplate = Template::raw(Guide::$view->renderTemplate('guide/_partials/render_content.twig', ['guide' => $guide]));
            Guide::$view->setTemplateMode($oldMode);
            return $renderedTemplate;
        }

        return 'Included guide has been moved or deleted.';
    }

    /**
     * @return string
     */
    public function render($templateString, $slug, $variables = [], $type = 'path'): string
    {
        try {

            // Add deprecation warnings for changes in 5.0.0
            $deprecator = Craft::$app->getDeprecator();
            $deprecator->throwExceptions = false;

            // Utility Classes
            if ($this->_str_contains_any($templateString, [
                'g-prose',
                'g-prose-sm',
                'g-prose-md',
                'g-prose-lg',
                'g-prose-xl',
                'g-prose-2xl',
                'g-hidden',
                'g-block',
                'g-inline-block',
                'g-flex',
                'g-inline-flex',
                'g-flex-wrap',
                'g-flex-nowrap',
                'g-flex-wrap-reverse',
                'g-flex-grow-0',
                'g-flex-grow',
                'g-flex-shrink-0',
                'g-flex-shrink',
                'g-grid',
                'g-inline-grid',
                'g-items-center',
                'g-items-start',
                'g-items-end',
                'g-items-baseline',
                'g-items-stretch',
                'g-justify-start',
                'g-justify-end',
                'g-justify-center',
                'g-justify-between',
                'g-justify-around',
                'g-justify-evenly',
                'g-grid-cols-2',
                'g-grid-cols-3',
                'g-grid-cols-4',
                'g-grid-cols-5',
                'g-grid-cols-6',
                'g-grid-cols-[var(--grid-cols)]',
                'g-grid-cols-[var(--grid-cols-sm)]',
                'g-grid-cols-[var(--grid-cols-md)]',
                'g-grid-cols-[var(--grid-cols-lg)]',
                'g-mx-0',
                'g-my-0',
                'g-mt-0',
                'g-mr-0',
                'g-mb-0',
                'g-ml-0',
                'g-mx-3',
                'g-my-3',
                'g-mt-3',
                'g-mr-3',
                'g-mb-3',
                'g-ml-3',
                'g-mx-6',
                'g-my-6',
                'g-mt-6',
                'g-mr-6',
                'g-mb-6',
                'g-ml-6',
                'g-px-0',
                'g-py-0',
                'g-pt-0',
                'g-pr-0',
                'g-pb-0',
                'g-pl-0',
                'g-px-3',
                'g-py-3',
                'g-pt-3',
                'g-pr-3',
                'g-pb-3',
                'g-pl-3',
                'g-px-6',
                'g-py-6',
                'g-pt-6',
                'g-pr-6',
                'g-pb-6',
                'g-pl-6',
                'g-absolute',
                'g-relative',
                'g-sticky',
                'g-top-0',
                'g-top-16',
                'g-right-0',
                'g-bottom-0',
                'g-left-0',
                'g-space-y-1',
                'g-space-y-2',
                'g-space-y-3',
                'g-space-y-6',
                'g-space-x-1',
                'g-space-x-2',
                'g-space-x-3',
                'g-space-x-6',
                'g-max-w-prose',
                'g-text-left',
                'g-text-center',
                'g-text-right',
                'g-text-primary',
                'g-text-sm',
                'g-font-bold',
                'g-cursor-pointer',
                'g-shadow-lg',
                'g-duration-150',
                'g-duration-300',
                'g-cursor-grab',
                'g-cursor-grabbing',
                'g-scroll-snap-none',
                'g-scroll-snap-x',
                'g-scroll-snap-y',
                'g-scroll-snap-start',
                'g-scroll-snap-center',
                'g-scroll-snap-end',
                'sm:g-prose',
                'md:g-prose',
                'lg:g-prose',
                'tldr:g-prose',
                'sm:g-prose-sm',
                'md:g-prose-sm',
                'lg:g-prose-sm',
                'tldr:g-prose-sm',
                'sm:g-prose-md',
                'md:g-prose-md',
                'lg:g-prose-md',
                'tldr:g-prose-md',
                'sm:g-prose-lg',
                'md:g-prose-lg',
                'lg:g-prose-lg',
                'tldr:g-prose-lg',
                'sm:g-prose-xl',
                'md:g-prose-xl',
                'lg:g-prose-xl',
                'tldr:g-prose-xl',
                'sm:g-prose-2xl',
                'md:g-prose-2xl',
                'lg:g-prose-2xl',
                'tldr:g-prose-2xl',
                'sm:g-hidden',
                'md:g-hidden',
                'lg:g-hidden',
                'tldr:g-hidden',
                'sm:g-block',
                'md:g-block',
                'lg:g-block',
                'tldr:g-block',
                'sm:g-inline-block',
                'md:g-inline-block',
                'lg:g-inline-block',
                'tldr:g-inline-block',
                'sm:g-flex',
                'md:g-flex',
                'lg:g-flex',
                'tldr:g-flex',
                'sm:g-inline-flex',
                'md:g-inline-flex',
                'lg:g-inline-flex',
                'tldr:g-inline-flex',
                'sm:g-flex-wrap',
                'md:g-flex-wrap',
                'lg:g-flex-wrap',
                'tldr:g-flex-wrap',
                'sm:g-flex-nowrap',
                'md:g-flex-nowrap',
                'lg:g-flex-nowrap',
                'tldr:g-flex-nowrap',
                'sm:g-flex-wrap-reverse',
                'md:g-flex-wrap-reverse',
                'lg:g-flex-wrap-reverse',
                'tldr:g-flex-wrap-reverse',
                'sm:g-flex-grow-0',
                'md:g-flex-grow-0',
                'lg:g-flex-grow-0',
                'tldr:g-flex-grow-0',
                'sm:g-flex-grow',
                'md:g-flex-grow',
                'lg:g-flex-grow',
                'tldr:g-flex-grow',
                'sm:g-flex-shrink-0',
                'md:g-flex-shrink-0',
                'lg:g-flex-shrink-0',
                'tldr:g-flex-shrink-0',
                'sm:g-flex-shrink',
                'md:g-flex-shrink',
                'lg:g-flex-shrink',
                'tldr:g-flex-shrink',
                'sm:g-grid',
                'md:g-grid',
                'lg:g-grid',
                'tldr:g-grid',
                'sm:g-inline-grid',
                'md:g-inline-grid',
                'lg:g-inline-grid',
                'tldr:g-inline-grid',
                'sm:g-items-center',
                'md:g-items-center',
                'lg:g-items-center',
                'tldr:g-items-center',
                'sm:g-items-start',
                'md:g-items-start',
                'lg:g-items-start',
                'tldr:g-items-start',
                'sm:g-items-end',
                'md:g-items-end',
                'lg:g-items-end',
                'tldr:g-items-end',
                'sm:g-items-baseline',
                'md:g-items-baseline',
                'lg:g-items-baseline',
                'tldr:g-items-baseline',
                'sm:g-items-stretch',
                'md:g-items-stretch',
                'lg:g-items-stretch',
                'tldr:g-items-stretch',
                'sm:g-justify-start',
                'md:g-justify-start',
                'lg:g-justify-start',
                'tldr:g-justify-start',
                'sm:g-justify-end',
                'md:g-justify-end',
                'lg:g-justify-end',
                'tldr:g-justify-end',
                'sm:g-justify-center',
                'md:g-justify-center',
                'lg:g-justify-center',
                'tldr:g-justify-center',
                'sm:g-justify-between',
                'md:g-justify-between',
                'lg:g-justify-between',
                'tldr:g-justify-between',
                'sm:g-justify-around',
                'md:g-justify-around',
                'lg:g-justify-around',
                'tldr:g-justify-around',
                'sm:g-justify-evenly',
                'md:g-justify-evenly',
                'lg:g-justify-evenly',
                'tldr:g-justify-evenly',
                'sm:g-grid-cols-2',
                'md:g-grid-cols-2',
                'lg:g-grid-cols-2',
                'tldr:g-grid-cols-2',
                'sm:g-grid-cols-3',
                'md:g-grid-cols-3',
                'lg:g-grid-cols-3',
                'tldr:g-grid-cols-3',
                'sm:g-grid-cols-4',
                'md:g-grid-cols-4',
                'lg:g-grid-cols-4',
                'tldr:g-grid-cols-4',
                'sm:g-grid-cols-5',
                'md:g-grid-cols-5',
                'lg:g-grid-cols-5',
                'tldr:g-grid-cols-5',
                'sm:g-grid-cols-6',
                'md:g-grid-cols-6',
                'lg:g-grid-cols-6',
                'tldr:g-grid-cols-6',
                'sm:g-grid-cols-[var(--grid-cols)]',
                'md:g-grid-cols-[var(--grid-cols)]',
                'lg:g-grid-cols-[var(--grid-cols)]',
                'tldr:g-grid-cols-[var(--grid-cols)]',
                'sm:g-grid-cols-[var(--grid-cols-sm)]',
                'md:g-grid-cols-[var(--grid-cols-sm)]',
                'lg:g-grid-cols-[var(--grid-cols-sm)]',
                'tldr:g-grid-cols-[var(--grid-cols-sm)]',
                'sm:g-grid-cols-[var(--grid-cols-md)]',
                'md:g-grid-cols-[var(--grid-cols-md)]',
                'lg:g-grid-cols-[var(--grid-cols-md)]',
                'tldr:g-grid-cols-[var(--grid-cols-md)]',
                'sm:g-grid-cols-[var(--grid-cols-lg)]',
                'md:g-grid-cols-[var(--grid-cols-lg)]',
                'lg:g-grid-cols-[var(--grid-cols-lg)]',
                'tldr:g-grid-cols-[var(--grid-cols-lg)]',
                'sm:g-mx-0',
                'md:g-mx-0',
                'lg:g-mx-0',
                'tldr:g-mx-0',
                'sm:g-my-0',
                'md:g-my-0',
                'lg:g-my-0',
                'tldr:g-my-0',
                'sm:g-mt-0',
                'md:g-mt-0',
                'lg:g-mt-0',
                'tldr:g-mt-0',
                'sm:g-mr-0',
                'md:g-mr-0',
                'lg:g-mr-0',
                'tldr:g-mr-0',
                'sm:g-mb-0',
                'md:g-mb-0',
                'lg:g-mb-0',
                'tldr:g-mb-0',
                'sm:g-ml-0',
                'md:g-ml-0',
                'lg:g-ml-0',
                'tldr:g-ml-0',
                'sm:g-mx-3',
                'md:g-mx-3',
                'lg:g-mx-3',
                'tldr:g-mx-3',
                'sm:g-my-3',
                'md:g-my-3',
                'lg:g-my-3',
                'tldr:g-my-3',
                'sm:g-mt-3',
                'md:g-mt-3',
                'lg:g-mt-3',
                'tldr:g-mt-3',
                'sm:g-mr-3',
                'md:g-mr-3',
                'lg:g-mr-3',
                'tldr:g-mr-3',
                'sm:g-mb-3',
                'md:g-mb-3',
                'lg:g-mb-3',
                'tldr:g-mb-3',
                'sm:g-ml-3',
                'md:g-ml-3',
                'lg:g-ml-3',
                'tldr:g-ml-3',
                'sm:g-mx-6',
                'md:g-mx-6',
                'lg:g-mx-6',
                'tldr:g-mx-6',
                'sm:g-my-6',
                'md:g-my-6',
                'lg:g-my-6',
                'tldr:g-my-6',
                'sm:g-mt-6',
                'md:g-mt-6',
                'lg:g-mt-6',
                'tldr:g-mt-6',
                'sm:g-mr-6',
                'md:g-mr-6',
                'lg:g-mr-6',
                'tldr:g-mr-6',
                'sm:g-mb-6',
                'md:g-mb-6',
                'lg:g-mb-6',
                'tldr:g-mb-6',
                'sm:g-ml-6',
                'md:g-ml-6',
                'lg:g-ml-6',
                'tldr:g-ml-6',
                'sm:g-px-0',
                'md:g-px-0',
                'lg:g-px-0',
                'tldr:g-px-0',
                'sm:g-py-0',
                'md:g-py-0',
                'lg:g-py-0',
                'tldr:g-py-0',
                'sm:g-pt-0',
                'md:g-pt-0',
                'lg:g-pt-0',
                'tldr:g-pt-0',
                'sm:g-pr-0',
                'md:g-pr-0',
                'lg:g-pr-0',
                'tldr:g-pr-0',
                'sm:g-pb-0',
                'md:g-pb-0',
                'lg:g-pb-0',
                'tldr:g-pb-0',
                'sm:g-pl-0',
                'md:g-pl-0',
                'lg:g-pl-0',
                'tldr:g-pl-0',
                'sm:g-px-3',
                'md:g-px-3',
                'lg:g-px-3',
                'tldr:g-px-3',
                'sm:g-py-3',
                'md:g-py-3',
                'lg:g-py-3',
                'tldr:g-py-3',
                'sm:g-pt-3',
                'md:g-pt-3',
                'lg:g-pt-3',
                'tldr:g-pt-3',
                'sm:g-pr-3',
                'md:g-pr-3',
                'lg:g-pr-3',
                'tldr:g-pr-3',
                'sm:g-pb-3',
                'md:g-pb-3',
                'lg:g-pb-3',
                'tldr:g-pb-3',
                'sm:g-pl-3',
                'md:g-pl-3',
                'lg:g-pl-3',
                'tldr:g-pl-3',
                'sm:g-px-6',
                'md:g-px-6',
                'lg:g-px-6',
                'tldr:g-px-6',
                'sm:g-py-6',
                'md:g-py-6',
                'lg:g-py-6',
                'tldr:g-py-6',
                'sm:g-pt-6',
                'md:g-pt-6',
                'lg:g-pt-6',
                'tldr:g-pt-6',
                'sm:g-pr-6',
                'md:g-pr-6',
                'lg:g-pr-6',
                'tldr:g-pr-6',
                'sm:g-pb-6',
                'md:g-pb-6',
                'lg:g-pb-6',
                'tldr:g-pb-6',
                'sm:g-pl-6',
                'md:g-pl-6',
                'lg:g-pl-6',
                'tldr:g-pl-6',
                'sm:g-absolute',
                'md:g-absolute',
                'lg:g-absolute',
                'tldr:g-absolute',
                'sm:g-relative',
                'md:g-relative',
                'lg:g-relative',
                'tldr:g-relative',
                'sm:g-sticky',
                'md:g-sticky',
                'lg:g-sticky',
                'tldr:g-sticky',
                'sm:g-top-0',
                'md:g-top-0',
                'lg:g-top-0',
                'tldr:g-top-0',
                'sm:g-top-16',
                'md:g-top-16',
                'lg:g-top-16',
                'tldr:g-top-16',
                'sm:g-right-0',
                'md:g-right-0',
                'lg:g-right-0',
                'tldr:g-right-0',
                'sm:g-bottom-0',
                'md:g-bottom-0',
                'lg:g-bottom-0',
                'tldr:g-bottom-0',
                'sm:g-left-0',
                'md:g-left-0',
                'lg:g-left-0',
                'tldr:g-left-0',
                'sm:g-space-y-1',
                'md:g-space-y-1',
                'lg:g-space-y-1',
                'tldr:g-space-y-1',
                'sm:g-space-y-2',
                'md:g-space-y-2',
                'lg:g-space-y-2',
                'tldr:g-space-y-2',
                'sm:g-space-y-3',
                'md:g-space-y-3',
                'lg:g-space-y-3',
                'tldr:g-space-y-3',
                'sm:g-space-y-6',
                'md:g-space-y-6',
                'lg:g-space-y-6',
                'tldr:g-space-y-6',
                'sm:g-space-x-1',
                'md:g-space-x-1',
                'lg:g-space-x-1',
                'tldr:g-space-x-1',
                'sm:g-space-x-2',
                'md:g-space-x-2',
                'lg:g-space-x-2',
                'tldr:g-space-x-2',
                'sm:g-space-x-3',
                'md:g-space-x-3',
                'lg:g-space-x-3',
                'tldr:g-space-x-3',
                'sm:g-space-x-6',
                'md:g-space-x-6',
                'lg:g-space-x-6',
                'tldr:g-space-x-6',
                'sm:g-max-w-prose',
                'md:g-max-w-prose',
                'lg:g-max-w-prose',
                'tldr:g-max-w-prose',
                'sm:g-text-left',
                'md:g-text-left',
                'lg:g-text-left',
                'tldr:g-text-left',
                'sm:g-text-center',
                'md:g-text-center',
                'lg:g-text-center',
                'tldr:g-text-center',
                'sm:g-text-right',
                'md:g-text-right',
                'lg:g-text-right',
                'tldr:g-text-right',
                'sm:g-text-primary',
                'md:g-text-primary',
                'lg:g-text-primary',
                'tldr:g-text-primary',
                'sm:g-text-sm',
                'md:g-text-sm',
                'lg:g-text-sm',
                'tldr:g-text-sm',
                'sm:g-font-bold',
                'md:g-font-bold',
                'lg:g-font-bold',
                'tldr:g-font-bold',
                'sm:g-cursor-pointer',
                'md:g-cursor-pointer',
                'lg:g-cursor-pointer',
                'tldr:g-cursor-pointer',
                'sm:g-shadow-lg',
                'md:g-shadow-lg',
                'lg:g-shadow-lg',
                'tldr:g-shadow-lg',
                'sm:g-duration-150',
                'md:g-duration-150',
                'lg:g-duration-150',
                'tldr:g-duration-150',
                'sm:g-duration-300',
                'md:g-duration-300',
                'lg:g-duration-300',
                'tldr:g-duration-300',
                'sm:g-cursor-grab',
                'md:g-cursor-grab',
                'lg:g-cursor-grab',
                'tldr:g-cursor-grab',
                'sm:g-cursor-grabbing',
                'md:g-cursor-grabbing',
                'lg:g-cursor-grabbing',
                'tldr:g-cursor-grabbing',
                'sm:g-scroll-snap-none',
                'md:g-scroll-snap-none',
                'lg:g-scroll-snap-none',
                'tldr:g-scroll-snap-none',
                'sm:g-scroll-snap-x',
                'md:g-scroll-snap-x',
                'lg:g-scroll-snap-x',
                'tldr:g-scroll-snap-x',
                'sm:g-scroll-snap-y',
                'md:g-scroll-snap-y',
                'lg:g-scroll-snap-y',
                'tldr:g-scroll-snap-y',
                'sm:g-scroll-snap-start',
                'md:g-scroll-snap-start',
                'lg:g-scroll-snap-start',
                'tldr:g-scroll-snap-start',
                'sm:g-scroll-snap-center',
                'md:g-scroll-snap-center',
                'lg:g-scroll-snap-center',
                'tldr:g-scroll-snap-center',
                'sm:g-scroll-snap-end',
                'md:g-scroll-snap-end',
                'lg:g-scroll-snap-end',
                'tldr:g-scroll-snap-end',
            ])) {
                $deprecator->log('Guide:4to5:utility-class-' . $slug, 'It looks like the Guide with the slug, `' . $slug . '`, contains a Guide utility class. Guide utility class will be removed in Guide 5.x. and will be replaced with better CSS support.');
            }

            // Vue Data Variables
            if ($this->_str_contains_any($templateString, [
                'vueBoolean1',
                'vueBoolean2',
                'vueBoolean3',
                'vueBoolean4',
                'vueBoolean5',
                'vueNumber1',
                'vueNumber2',
                'vueNumber3',
                'vueNumber4',
                'vueNumber5',
                'vueString1',
                'vueString2',
                'vueString3',
                'vueString4',
                'vueString5',
            ])) {
                $deprecator->log('Guide:4to5:vue-' . $slug, 'It looks like the Guide with the slug, `' . $slug . '`, contains Vue.js variables. Support for Vue will be removed in Guide 5.x. A JavaScript callback will be available to add custom functionality.');
            }

            if ($type === 'path') {
                $content = Template::raw(Guide::$view->renderTemplate($templateString, $variables));
            } else if ($type === 'string') {
                $content = Template::raw(Guide::$view->renderString($templateString, $variables));
            }
        } catch (\Throwable $e) {
            return $this->error($e->getMessage() . ' in guide with the slug: ' . $slug, 'error');
        }

        if ($content ?? false) {
            return $content;
        }

        return 'Guide could not be displayed.';
    }

    /**
     * @return string|null
     */
    public function var($variable)
    {
        switch ($variable) {
            case 'clientName':
                $value = !empty(Guide::$settings->clientName) ? Guide::$settings->clientName : Template::raw('<span class="fpo">Client Name</span>');
                break;
            case 'myCompanyName':
                $value = !empty(Guide::$settings->myCompanyName) ? Guide::$settings->myCompanyName : Template::raw('<span class="fpo">My Company Name</span>');
                break;
            case 'projectName':
                $value = !empty(Guide::$settings->projectName) ? Guide::$settings->projectName : Template::raw('<span class="fpo">Project Name</span>');
                break;
        }

        return $value ?? null;
    }



    /**
     * Renders an error message.
     *
     * @param string $error
     * @param string $errorClass
     * @return string
     */
    private function error(string $error, string $errorClass): string
    {
        $icon = Html::tag('span', '', [
            'data' => [
                'icon' => 'alert',
            ]
        ]);
        $content = Html::tag('p', $icon . ' ' . Html::encode($error), [
            'class' => $errorClass,
        ]);

        return Html::tag('div', $content, [
            'class' => 'pane',
        ]);
    }

    // Private Methods
    // =========================================================================
    private function _str_contains_any(string $haystack, array $needles): bool
    {
        return array_reduce($needles, fn($a, $n) => $a || str_contains($haystack, $n), false);
    }
}
