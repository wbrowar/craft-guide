import {EditorComponent, Guide, PluginSettings, PluginUserOperations} from './types/plugins';

const globalsElement = document.getElementById('guide-admin-globals');

export const assetComponents: EditorComponent[] = globalsElement?.dataset?.assetComponents
  ? JSON.parse(globalsElement.dataset.assetComponents)
  : null;
export const assetPath: string = globalsElement?.dataset?.assetPath || '';
export const devMode: boolean = globalsElement?.dataset?.devMode ? globalsElement.dataset.devMode === 'true' : false;
export const guides: Guide[] = globalsElement?.dataset?.guides ? JSON.parse(globalsElement.dataset.guides) : null;
export const proEdition: boolean = globalsElement?.dataset?.proEdition
  ? globalsElement.dataset.proEdition === 'true'
  : false;
// export const proEdition = false;
export const settings: PluginSettings = globalsElement?.dataset?.settings
  ? JSON.parse(globalsElement.dataset.settings)
  : null;
export const templates: {
  filenames: Record<string, string>;
  contents: Record<string, string>;
} = globalsElement?.dataset?.templates ? JSON.parse(globalsElement.dataset.templates) : null;
export const userOperations: PluginUserOperations = globalsElement?.dataset?.userOperations
  ? JSON.parse(globalsElement.dataset.userOperations)
  : null;

// Set text to kebab-case
export function kebab(text: string) {
  /* eslint-disable */
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
  /* eslint-enable */
}
