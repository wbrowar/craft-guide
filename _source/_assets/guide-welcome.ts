import { createApp } from 'vue';
import GuideWelcome from './components/GuideWelcome.vue';

const guideWelcome = document.getElementById('guide-welcome');
if (guideWelcome) {
  createApp(GuideWelcome, {
    ...guideWelcome.dataset,
  }).mount(guideWelcome);
}
