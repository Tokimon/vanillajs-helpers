/**
 * Returns the objects type definition (eg. [object String])
 * @param  {Object} obj - Object to examine
 * @return {String} - Type representation (eg. [object String])
 */
export default function objectType(obj) {
  if(typeof obj === 'undefined') { return 'undefined'; }
  return Object.prototype.toString.call(obj).match(/(\w+)\]$/)[1].toLowerCase();
}
