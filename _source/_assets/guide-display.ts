import { createApp } from 'vue';
import GuideDisplay from './components/GuideDisplay.vue';
import './global.css';

const guideDisplays = document.querySelectorAll('[data-guide-display]');
if (guideDisplays) {
  guideDisplays.forEach((display) => {
    GuideDisplay.template = `#${display.dataset?.guideDisplay}`;
    createApp(GuideDisplay, display.dataset).mount(display);
  });
}
