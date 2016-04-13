/* eslint no-empty: "off" */

/**
 * Iterate over an iteratable object (object with numeric entries and a length property)
 * use `return false` to break the loop prematurely.
 * @param  {Object} iterable - Iteratable (Array-like) object
 * @param  {Function} cb - Method to call on each iteration
 * @return {Number} - The number of iterated items
 */
export default function iterate(iterable, cb) {
  const len = iterable.length;
  let i = -1;
  while(++i < len && cb(iterable[i], i, iterable) !== false) {}
  return len;
}

/**
 * Iterate over each word in a phrase
 * @param  {String} phrase - String containing the words to iterate over
 * @param  {Function} cb - Function to call on each word
 * @return {Number} - Number of words iterated
 */
export function words(phrase, cb, seperator = ' ') {
  return iterate(phrase.split(seperator), cb);
}
