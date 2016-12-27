import objectType from './objectType';

/**
 * Is the given object of type String
 * @param  {Object}  obj - Object to examine
 * @return {Boolean} - Whether the object is a plain Object or not
 */
export default function isObject(obj) {
  return objectType(obj) === 'object' && Object(obj) === obj;
}
