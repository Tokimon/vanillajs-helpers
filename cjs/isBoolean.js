Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBoolean;
/**
 * Is the given object a boolean
 * @param  {Object}  obj - Object to examine
 * @return {Boolean} - Whether the object is a Boolean or not
 */
function isBoolean(obj) {
  return obj === true || obj === false || obj instanceof Boolean;
}