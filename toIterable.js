/**
 * Converts an Array into an iterable Object, by adding indexed keys and a length
 * to the target object.
 * @param  {Array} arr - Array to transfer the keys to
 * @param  {Object={}} obj - Objects to convert to iterable
 * @return {Object} - The iterable object
 */
export default function toIterable(arr, obj = {}) {
  Array.prototype.push.apply(obj, arr);
  return obj;
}
