import { createApp } from 'vue';
import { log } from "./globals";
import GuideWelcome from './components/GuideWelcome.vue';

export default async function init() {
  const guideWelcome = document.getElementById('guide-welcome');
  if (guideWelcome) {
    createApp(GuideWelcome, {
      ...guideWelcome.dataset,
    }).mount(guideWelcome);
  }

  log('Welcome loaded');
}
