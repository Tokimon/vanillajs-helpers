/**
 * Returns the objects type definition (eg. [object String])
 * @param  {Object} obj - Object to examine
 * @return {String} - Type representation (eg. [object String])
 */
export function objectType(obj) { return Object.prototype.toString.call(obj).match(/\w+\]$/)[1].toLowerCase(); }
