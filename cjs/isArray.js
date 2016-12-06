Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isArray;
/**
 * Is the given object an Array
 * @param  {Object}  obj - Object to examine
 * @return {Boolean} - Whether the object is an Array or not
 */
function isArray(obj) {
  return Array.isArray(obj);
}