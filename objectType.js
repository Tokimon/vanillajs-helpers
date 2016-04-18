/**
 * Returns the objects type definition (eg. [object String])
 * @param  {Object} obj - Object to examine
 * @return {String} - Type representation (eg. [object String])
 */
export function objectType(obj) { return Object.prototype.toString.call(obj).match(/\w+\]$/)[1].toLowerCase(); }




/**
 * Is the given object of type String
 * @param  {Object}  obj - Object to examine
 * @return {Boolean} - Whether the object is a String or not
 */
export function isString(obj) { return objectType(obj) === 'string'; }




/**
 * Is the given object an Array
 * @param  {Object}  obj - Object to examine
 * @return {Boolean} - Whether the object is an Array or not
 */
export function isArray(obj) { return Array.isArray(obj); }




/**
 * Is the given object a Function
 * @param  {Object}  obj - Object to examine
 * @return {Boolean} - Whether the object is a Funciton or not
 */
export function isFunction(obj) { return typeof obj === 'function'; }
