import { createApp } from 'vue';
import { log, error } from './globals';
import GuideDisplay from './components/GuideDisplay.vue';

import GuideModal from './components/GuideModal.vue';
import OnLoad from './components/OnLoad.vue';
import PlacementInlineEditor from './components/PlacementInlineEditor.vue';
import SvgGuide from './components/SvgGuide.vue';
import SvgSettings from './components/SvgSettings.vue';

export default function init() {
  try {
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

          GuideDisplay.name = 'GuideDisplay';
          GuideDisplay.template = `#${display.dataset.guideDisplay}`;

          const displayApp = createApp(GuideDisplay, display.dataset);
          log('Data set', { ...display.dataset });

          displayApp.component('guide-modal', GuideModal);
          displayApp.component('on-load', OnLoad);
          displayApp.component('placement-inline-editor', PlacementInlineEditor);
          displayApp.component('svg-guide', SvgGuide);
          displayApp.component('svg-settings', SvgSettings);
          displayApp.config.compilerOptions.delimiters = ['${', '}'];
          displayApp.config.globalProperties.$log = console.log;
          displayApp.mount(display);

          log('Display mounted for', display.dataset);
        }
      });
    }

    log('Display loaded');
  } catch (err) {
    error(err);
  }
}
