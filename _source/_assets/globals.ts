let devMode = false;
const globals = document.getElementById('guide-admin-globals');

if (globals) {
  devMode = globals.dataset.devMode === 'true';
}

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
