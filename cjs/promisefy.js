Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = promisefy;
/**
 * Converts a callback based action into returning a Promise instead.
 *
 * @param  {Function} fn - The function you want to return a promise instead of using callback
 * @return {Function} - A version of the given function that now retuns a promise once executed.
 */
function promisefy(fn) {
  return (...args) => new Promise((resolve, reject) => {
    fn(...args, (err, data) => err ? reject(err) : resolve(data));
  });
}