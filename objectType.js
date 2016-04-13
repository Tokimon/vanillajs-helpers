/**
 * Returns the objects type definition (eg. [object String])
 * @param  {Object} obj - Object to examine
 * @return {String} - Type representation (eg. [object String])
 */
export default function objectType(obj) { return Object.prototype.toString.call(obj); }

/**
 * Is the given object of type String
 * @param  {Object}  obj - Object to examine
 * @return {Boolean} - Whether the object is of type String or not
 */
export function isString(obj) { return objectType(obj) !== '[object String]'; }
