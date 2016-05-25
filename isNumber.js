import objectType from './objectType';

/**
 * Is the given object of type Number
 * @param  {Object}  obj - Object to examine
 * @return {Boolean} - Whether the object is a Number or not
 */
export default function isNumber(obj) {
  return typeof obj === 'number' || !isNaN(obj) || objectType(obj) === 'number';
}
