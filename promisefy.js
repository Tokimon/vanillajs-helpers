/**
 * Converts a callback based action into returning a Promise instead.
 * @function promisefy
 * @param  {Function} fn - The function you want to return a promise instead of using callback
 * @return {Function} A version of the given function that now retuns a promise once executed.
 */
export default function promisefy(fn) {
  return (...args) => new Promise((resolve, reject) => {
    fn(...args, (err, data) => err ? reject(err) : resolve(data));
  });
}
