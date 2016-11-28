'use strict';

exports.default = truncate;

var _isString = require('./isString');

var _isString2 = _interopRequireDefault(_isString);

var _isNumber = require('./isNumber');

var _isNumber2 = _interopRequireDefault(_isNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Limits a string to a given number of characters and adds '...' after
 * @param  {String} str - The string to limit
 * @param  {Number} maxLength - Max length allowed for the string
 * @param  {String} [end='...'] - String to add at the end of the string if the string has been truncated
 * @return {Mixed|String} - Trimmed down string or the object given if it is not a string
 */
function truncate(str, maxLength, end = '...') {
  if (!(0, _isString2.default)(str) || !(0, _isNumber2.default)(maxLength)) {
    return str;
  }
  return str.length <= maxLength ? str : `${ str.substr(0, maxLength) }${ end }`;
}