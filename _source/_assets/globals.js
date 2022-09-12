const globalsElement = document.getElementById('guide-admin-globals');
export const assetComponents = globalsElement?.dataset?.assetComponents
    ? JSON.parse(globalsElement.dataset.assetComponents)
    : null;
export const assetPath = globalsElement?.dataset?.assetPath || '';
export const devMode = globalsElement?.dataset?.devMode ? globalsElement.dataset.devMode === 'true' : false;
export const guides = globalsElement?.dataset?.guides ? JSON.parse(globalsElement.dataset.guides) : null;
export const proEdition = globalsElement?.dataset?.proEdition
    ? globalsElement.dataset.proEdition === 'true'
    : false;
// export const proEdition = false;
export const settings = globalsElement?.dataset?.settings
    ? JSON.parse(globalsElement.dataset.settings)
    : null;
export const templates = globalsElement?.dataset?.templates ? JSON.parse(globalsElement.dataset.templates) : null;
export const t = globalsElement?.dataset?.translations
    ? JSON.parse(globalsElement.dataset.translations)
    : null;
export const userOperations = globalsElement?.dataset?.userOperations
    ? JSON.parse(globalsElement.dataset.userOperations)
    : null;
// export const userOperations: PluginUserOperations = {
//   editGuides: false,
//   deleteGuides: false,
//   setAccessPermissions: true,
//   useOrganizer: true,
// };
log('translations', t);
// LOGGING FUNCTIONS
export function dir(...args) {
    logger('dir', args);
}
export function error(...args) {
    logger('error', args);
}
export function log(...args) {
    logger('log', args);
}
export function table(...args) {
    logger('table', args);
}
export function warn(...args) {
    logger('warn', args);
}
function logger(type, args) {
    const spirit = '📓';
    if (devMode) {
        for (let i = 0; i < args.length; i++) {
            const spacer = i > 0 ? '◉ ' : '';
            switch (type) {
                case 'dir':
                    if (typeof args[i] === 'string') {
                        // eslint-disable-next-line no-console
                        console.dir(spacer + spirit + ' ' + args[i]);
                    }
                    else {
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
export function kebab(text) {
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
//# sourceMappingURL=globals.js.map