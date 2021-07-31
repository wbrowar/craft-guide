import { createApp } from 'vue';
import GuideEditor from './components/GuideEditor.vue';
import { EditorComponent, Guide } from './types/plugins';

let devMode = false;
const globals = document.getElementById('guide-admin-globals');

if (globals) {
  const assetComponents = JSON.parse(globals.dataset.assetComponents);
  devMode = globals.dataset.devMode === 'true';
  const guides = JSON.parse(globals.dataset.guides);
  const proEdition = globals.dataset.proEdition === 'true';
  const settings = JSON.parse(globals.dataset.settings);
  const templates = JSON.parse(globals.dataset.templates);
  const userOperations = JSON.parse(globals.dataset.userOperations);

  const guideEditor = document.getElementById('guide-editor');
  if (guideEditor) {
    const guideComponents: EditorComponent[] = guides.map((guide: Guide) => {
      return {
        title: guide.title,
        group: 'guides',
        code: `{{ craft.guide.include({ slug: '${guide.slug}' }) }}`,
        documentation: guide.summary || null,
        props: {
          slug: `The slug of the guide, as set in the Guide Editor.`,
        },
      };
    });

    createApp(GuideEditor, {
      assetComponents,
      devMode,
      guideComponents,
      proEdition,
      settings,
      templates,
      userOperations,
      ...guideEditor.dataset,
    }).mount(guideEditor);
  }
}
