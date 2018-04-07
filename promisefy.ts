import isFunc from './isFunction';



/**
 * Converts a callback based action into one returning a Promise instead.
 *
 * ```ts
 * function action(name, callback) { ... callback(); }
 *
 * action = promisefy(action);
 *
 * action
 *   .then(() => 'all good')
 *   .catch(() => 'Something went wrong');
 * ```
 *
 * @param settings - The settings for the string formatting
 * @param str - The string to format
 * @return - The formatted string
 */
export default function promisefy(fn: Function): Function {
  if (!isFunc(fn)) { throw new TypeError('Promisefy: fn is not a function'); }

  return (...args: any[]) => new Promise((resolve, reject) => {
    fn(...args, (err: string | Error, data: any) => err ? reject(err) : resolve(data));
  });
}
