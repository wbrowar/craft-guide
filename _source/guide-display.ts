import { createApp } from 'vue';
import { log } from "./globals";
import GuideDisplay from './components/GuideDisplay.vue';

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

        GuideDisplay.template = `#${display.dataset.guideDisplay}`;
        createApp({ ...GuideDisplay }, display.dataset).mount(display);
      }
    });
  }

  log('Display loaded');
}