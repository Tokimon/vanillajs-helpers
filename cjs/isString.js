'use strict';

exports.default = isString;

var _objectType = require('./objectType');

var _objectType2 = _interopRequireDefault(_objectType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Is the given object of type String
 * @param  {Object}  obj - Object to examine
 * @return {Boolean} - Whether the object is a String or not
 */
function isString(obj) {
  return typeof obj === 'string' || (0, _objectType2.default)(obj) === 'string';
}