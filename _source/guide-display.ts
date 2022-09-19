import { createApp } from 'vue';
import { log } from './globals';
import GuideDisplay from './components/GuideDisplay.vue';

import GuideModal from './components/GuideModal.vue';
import OnLoad from './components/OnLoad.vue';
import PlacementInlineEditor from './components/PlacementInlineEditor.vue';
import SvgGuide from './components/SvgGuide.vue';
import SvgSettings from './components/SvgSettings.vue';

export default async function init() {
  // Add guides to the page
  const guideDisplays: NodeListOf<HTMLElement> = document.querySelectorAll('[data-guide-display]');
  if (guideDisplays) {
    guideDisplays.forEach((display) => {
      if (display.dataset?.guideDisplay) {
        if (display.dataset?.teleportSelector) {
          const teleportElement = document.querySelector(display.dataset.teleportSelector);

          if (teleportElement) {
            const teleportTarget = document.createElement('div');
            teleportTarget.id = `teleport-${display.dataset.guideDisplay}`;

            if (display.dataset?.teleportContainerClass) {
              teleportTarget.setAttribute('class', display.dataset.teleportContainerClass);
            }

            if (display.dataset?.teleportMethod === 'prepend') {
              teleportElement.insertBefore(teleportTarget, teleportElement.firstChild);
            } else {
              teleportElement.appendChild(teleportTarget);
            }
          }
        }

        // GuideDisplay.components = {
        //   GuideModal,
        //   OnLoad,
        //   PlacementInlineEditor,
        //   SvgGuide,
        //   SvgSettings,
        // };
        GuideDisplay.name = 'GuideDisplay';
        GuideDisplay.template = `#${display.dataset.guideDisplay}`;

        log('GuideDisplay', GuideDisplay, display);

        const displayApp = createApp(GuideDisplay, { ...display.dataset });
        displayApp.component('guide-modal', GuideModal);
        displayApp.component('on-load', OnLoad);
        displayApp.component('placement-inline-editor', PlacementInlineEditor);
        displayApp.component('svg-guide', SvgGuide);
        displayApp.component('svg-settings', SvgSettings);
        displayApp.config.compilerOptions.delimiters = ['${', '}'];
        displayApp.config.errorHandler = (err) => {
          log('errorred', err);
        }
        displayApp.mount(display);

        log('Display mounted for', display.dataset.guideDisplay);
      }
    });
  }

  log('Display loaded');
}
