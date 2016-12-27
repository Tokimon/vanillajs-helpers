import isFunction from './isFunction';
import isNumber from './isNumber';

/**
 * Iterate over an iteratable object (object with numeric entries and a length property)
 * use `return false` to break the loop prematurely.
 * @param  {Object|Array} iterable - iterable (Array-like) object
 * @param  {Function} cb - Method to call on each iteration
 * @return {Number} - Number of iterated items
 */
export default function iterate(collection, cb) {
  if(!isFunction(cb) || !collection) { return 0; }

  const len = collection.length;

  // Make a single iteration if the 'iterable' is not a iterable collection
  if(!isNumber(len)) {
    cb(collection, 0, collection);
    return 1;
  }

  let i = -1;
  while(++i < len) {
    if(cb(collection[i], i, collection) === false) { break; }
  }

  return len;
}
