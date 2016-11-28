"use strict";

exports.default = objectType;
/**
 * Returns the objects type definition name (eg. [object String] => "string")
 * @param  {Object} obj - Object to examine
 * @return {String} - Type representation (eg. "string")
 */
function objectType(obj) {
  return Object.prototype.toString.call(obj).toLowerCase().match(/(\w+)]$/)[1];
}