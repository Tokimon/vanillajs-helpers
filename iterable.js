/**
 * Transfers the indexes and length of an Array to a given Object, thus making it
 * iterable without being an actual array.
 * @param  {Object} [obj={}] - Object to make iterable
 * @param  {Array} [arr=[]] - Array to transfer keys from
 * @return {Object} - The iterable object
 */
export default function iterable(obj = {}, arr = []) {
  Array.prototype.push.apply(obj, arr);
  return obj;
}
