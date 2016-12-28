/**
 * Is the given object is a finite Number
 * @function isNumber
 * @param  {Object}  obj - Object to examine
 * @return {Boolean} Whether the object is a Number or not
 */
export default function isNumber(obj) {
  if(Number.isFinite) { return Number.isFinite(obj); }
  return typeof obj === 'number' && isFinite(obj);
}
