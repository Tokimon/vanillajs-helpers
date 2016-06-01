/* eslint no-empty: "off" */
import isFunction from './isFunction';

/**
 * Iterate over an iteratable object (object with numeric entries and a length property)
 * use `return false` to break the loop prematurely.
 * @param  {Object|Array} iterable - iterable (Array-like) object
 * @param  {Function} cb - Method to call on each iteration
 * @return {Number} - Number of iterated items
 */
export default function iterate(iterable, cb) {
  if(!isFunction(cb) || !iterable) { return 0; }

  const len = iterable.length;

  // Make a single iteration if the 'iterable' is not a iterable collection
  if(typeof len === 'undefined') {
    cb(iterable, 0, iterable);
    return 1;
  }

  let i = -1;
  while(++i < len && cb(iterable[i], i, iterable) !== false) {}
  return len;
}
