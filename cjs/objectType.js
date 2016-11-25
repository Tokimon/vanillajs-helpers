"use strict";

exports.default = objectType;
/**
 * Returns the objects type definition (eg. [object String])
 * @param  {Object} obj - Object to examine
 * @return {String} - Type representation (eg. [object String])
 */
function objectType(obj) {
  return Object.prototype.toString.call(obj).toLowerCase().match(/(\w+)\]$/)[1];
}