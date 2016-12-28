import objectType from './objectType';

/**
 * Is the given object of type String
 * @function isString
 * @param  {Object}  obj - Object to examine
 * @return {Boolean} Whether the object is a String or not
 */
export default function isString(obj) {
  return typeof obj === 'string' || objectType(obj) === 'string';
}
