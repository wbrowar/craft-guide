import type { EditorComponent, Guide, PluginSettings, PluginUserOperations } from './types/plugins';

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
export const scope: ('display' | 'admin' | 'welcome')[] = globalsElement?.dataset?.scope
  ? JSON.parse(globalsElement.dataset.scope)
  : [];
export const settings: PluginSettings = globalsElement?.dataset?.settings
  ? JSON.parse(globalsElement.dataset.settings)
  : null;
export const templates: {
  filenames: Record<string, string>;
  contents: Record<string, string>;
} = globalsElement?.dataset?.templates ? JSON.parse(globalsElement.dataset.templates) : null;
export const t: Record<string, string> = globalsElement?.dataset?.translations
  ? JSON.parse(globalsElement.dataset.translations)
  : null;
export const userOperations: PluginUserOperations = globalsElement?.dataset?.userOperations
  ? JSON.parse(globalsElement.dataset.userOperations)
  : null;

log('translations', t);

// LOGGING FUNCTIONS
export function dir(...args: any[]) {
  logger('dir', args);
}
export function error(...args: any[]) {
  logger('error', args);
}
export function log(...args: any[]) {
  logger('log', args);
}
export function table(...args: any[]) {
  logger('table', args);
}
export function warn(...args: any[]) {
  logger('warn', args);
}
function logger(type: string, args: any[]) {
  const spirit = '📓';

  if (devMode) {
    for (let i = 0; i < args.length; i++) {
      const spacer = i > 0 ? '◉ ' : '';
      switch (type) {
        case 'dir':
          if (typeof args[i] === 'string') {
            // eslint-disable-next-line no-console
            console.dir(spacer + spirit + ' ' + args[i]);
          } else {
            // eslint-disable-next-line no-console
            console.dir(args[i]);
          }
          break;
        case 'error':
          // eslint-disable-next-line no-console
          console.error(spacer + spirit, args[i]);
          break;
        case 'log':
          // eslint-disable-next-line no-console
          console.log(spacer + spirit, args[i]);
          break;
        case 'table':
          // eslint-disable-next-line no-console
          console.table(args[i]);
          break;
        case 'warn':
          // eslint-disable-next-line no-console
          console.warn(spacer + spirit, args[i]);
          break;
      }
    }
  }
}

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
