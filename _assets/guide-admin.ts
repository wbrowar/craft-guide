import { createApp } from 'vue';
import GuideEditor from './components/GuideEditor.vue';
import Organizer from './components/Organizer.vue';
import PluginUtilities from './components/PluginUtilities.vue';

const guideEditor = document.getElementById('guide-editor');
if (guideEditor) {
  createApp(GuideEditor, {
    ...guideEditor.dataset,
  }).mount(guideEditor);
}

const guideUtilities = document.getElementById('guide-utilities');
if (guideUtilities) {
  createApp(PluginUtilities, {
    ...guideUtilities.dataset,
  }).mount(guideUtilities);
}

const organizer = document.getElementById('guide-organizer');
if (organizer) {
  createApp(Organizer, {
    ...organizer.dataset,
  }).mount(organizer);
}
