'use strict';

exports.default = isObject;

var _objectType = require('./objectType');

var _objectType2 = _interopRequireDefault(_objectType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Is the given object of type String
 * @param  {Object}  obj - Object to examine
 * @return {Boolean} - Whether the object is a String or not
 */
function isObject(obj) {
  return typeof obj === 'object' && (0, _objectType2.default)(obj) === 'object';
}