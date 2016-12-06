Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNumber;
/**
 * Is the given object is a finite Number
 * @param  {Object}  obj - Object to examine
 * @return {Boolean} - Whether the object is a Number or not
 */
function isNumber(obj) {
  if (Number.isFinite) {
    return Number.isFinite(obj);
  }
  return typeof obj === 'number' && isFinite(obj);
}