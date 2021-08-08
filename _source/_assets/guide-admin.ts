import { createApp } from 'vue';
import GuideEditor from './components/GuideEditor.vue';
import Organizer from './components/Organizer.vue';
import { EditorComponent, Guide, PluginUserOperations } from './types/plugins';

const guideEditor = document.getElementById('guide-editor');
if (guideEditor) {
  createApp(GuideEditor, {
    ...guideEditor.dataset,
  }).mount(guideEditor);
}

const organizer = document.getElementById('guide-organizer');
if (organizer) {
  createApp(Organizer, {
    ...organizer.dataset,
  }).mount(organizer);
}
