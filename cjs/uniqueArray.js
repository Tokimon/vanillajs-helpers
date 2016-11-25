'use strict';

exports.default = uniqueArray;

var _isArray = require('./isArray');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Filter out any duplicate values from an array
 * @param  {Array}  [arr=[]] - Array that needs unique values
 * @return {[type]} - The given array with only unique values
 */
function uniqueArray(arr) {
  if (!(0, _isArray2.default)(arr)) {
    return arr;
  }
  return arr.filter((item, i, a) => a.indexOf(item) === i);
}