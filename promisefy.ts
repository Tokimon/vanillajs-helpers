import isFunc from './isFunction';



/**
 * Converts a callback based action into returning a Promise instead.
 */
export default function promisefy(fn: Function): Function {
  if(!isFunc(fn)) { throw new TypeError('Promisefy: fn is not a function'); }

  return (...args: any[]) => new Promise((resolve, reject) => {
    fn(...args, (err: string|Error, data: any) => err ? reject(err) : resolve(data));
  });
}
