/**
 * Returns the objects type definition name (eg. [object String] => "string")
 * @param  {Object} obj - Object to examine
 * @return {String} - Type representation (eg. "string")
 */
export default function objectType(obj) {
  return Object.prototype.toString.call(obj).toLowerCase().match(/(\w+)]$/)[1];
}
