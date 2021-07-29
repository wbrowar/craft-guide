import { createApp } from 'vue';
import GuideEditor from './components/GuideEditor.vue';

const globals = document.getElementById('guide-admin-globals');

if (globals) {
  const assetComponents = JSON.parse(globals.dataset.assetComponents);
  const proEdition = globals.dataset.proEdition === 'true';
  const settings = JSON.parse(globals.dataset.settings);
  const templates = JSON.parse(globals.dataset.templates);
  const userOperations = JSON.parse(globals.dataset.userOperations);

  const guideEditor = document.getElementById('guide-editor');
  if (guideEditor) {
    createApp(GuideEditor, {
      assetComponents,
      proEdition,
      settings,
      templates,
      userOperations,
      ...guideEditor.dataset,
    }).mount(guideEditor);
  }
}
