'use strict';

exports.default = isFunction;
/**
 * Is the given object a Function
 * @param  {Object}  obj - Object to examine
 * @return {Boolean} - Whether the object is a Funciton or not
 */
function isFunction(obj) {
  return typeof obj === 'function';
}