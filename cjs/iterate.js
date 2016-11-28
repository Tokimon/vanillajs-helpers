'use strict';

exports.default = iterate;

var _isFunction = require('./isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Iterate over an iteratable object (object with numeric entries and a length property)
 * use `return false` to break the loop prematurely.
 * @param  {Object|Array} iterable - iterable (Array-like) object
 * @param  {Function} cb - Method to call on each iteration
 * @return {Number} - Number of iterated items
 */
function iterate(iterable, cb) {
  if (!(0, _isFunction2.default)(cb) || !iterable) {
    return 0;
  }

  const len = iterable.length;

  // Make a single iteration if the 'iterable' is not a iterable collection
  if (typeof len === 'undefined') {
    cb(iterable, 0, iterable);
    return 1;
  }

  let i = -1;
  while (++i < len) {
    if (cb(iterable[i], i, iterable) === false) {
      break;
    }
  }
  return len;
}