/* eslint no-empty: "off" */

/**
 * Iterate over an iteratable object (object with numeric entries and a length property)
 * use `return false` to break the loop prematurely.
 * @param  {Object|Array} iterable - iterable (Array-like) object
 * @param  {Function} cb - Method to call on each iteration
 * @return {Number} - Number of iterated items
 */
export default function iterate(iterable, cb) {
  const len = iterable ? iterable.length : 0;
  if(!len || !cb) { return 0; }

  let i = -1;
  while(++i < len && cb(iterable[i], i, iterable) !== false) {}
  return len;
}
