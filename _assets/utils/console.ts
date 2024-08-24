/*
 * Log an object and show all of its properties and their values in the console.
 *
 * @param args Any amount of items to log. If an argument is just a string, it will be logged via console.log().
 *
 * ```
 * import { dir } from 'utils/console'
 *
 * dir('My object', myObject)
 * ```
 */
export function dir (...args: any[]) {
    logger('dir', args)
}

/*
 * Displays an error in the console along with a stack trace to help debug the origin of the error.
 *
 * @param args Any amount of items to log.
 *
 * ```
 * import { error } from 'utils/console'
 *
 * error('An error occurred here.')
 * ```
 */
export function error (...args: any[]) {
    logger('error', args)
}

/*
 * Logs anything (string, number, array, object, etc...) to the console.
 *
 * @param args Any amount of items to log.
 *
 * ```
 * import { log } from 'utils/console'
 *
 * log('These are things I’d like to log', itemOne, itemTwo)
 * ```
 */
export function log (...args: any[]) {
    logger('log', args)
}

/*
 * Logs data using console.table.
 *
 * @param args Any amount of items to log.
 *
 * ```
 * import { table } from 'utils/console'
 *
 * table(itemOne, itemTwo)
 * ```
 */
export function table (...args: any[]) {
    logger('table', args)
}

/*
 * Logs a warning into the console.
 *
 * @param args Any amount of items to log.
 *
 * ```
 * import { warn } from 'utils/console'
 *
 * warn('Something isn’t right here, but it’s not bad enough to show an error')
 * ```
 */
export function warn (...args: any[]) {
    logger('warn', args)
}

/*
 * A helper function that formats and logs all console commands.
 * Instead of using this, use one of the other logging functions.
 *
 * @param type Determines the type of log to display.
 * @param args Arguments to be logged.
 *
 * ```
 * logger('log', itemsToLog)
 * ```
 */
function logger (type: 'dir' | 'error' | 'log' | 'table' | 'warn', args: any[]) {
    const spirit = '🍱'

    if (import.meta.env.DEV) {
        for (let i = 0; i < args.length; i++) {
            const spacer = i > 0 ? '◉ ' : ''
            switch (type) {
                case 'dir':
                    if (typeof args[i] === 'string') {
                        // eslint-disable-next-line no-console
                        console.dir(spacer + spirit + ' ' + args[i])
                    } else {
                        // eslint-disable-next-line no-console
                        console.dir(args[i])
                    }
                    break
                case 'error':
                    // eslint-disable-next-line no-console
                    console.error(spacer + spirit, args[i])
                    break
                case 'log':
                    // eslint-disable-next-line no-console
                    console.log(spacer + spirit, args[i])
                    break
                case 'table':
                    // eslint-disable-next-line no-console
                    console.table(args[i])
                    break
                case 'warn':
                    // eslint-disable-next-line no-console
                    console.warn(spacer + spirit, args[i])
                    break
            }
        }
    }
}