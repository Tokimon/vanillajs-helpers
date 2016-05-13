import objectType from './objectType';

/**
 * Is the given object of type String
 * @param  {Object}  obj - Object to examine
 * @return {Boolean} - Whether the object is a String or not
 */
export default function isObject(obj) {
  return typeof obj === 'object' && objectType(obj) === 'object';
}
