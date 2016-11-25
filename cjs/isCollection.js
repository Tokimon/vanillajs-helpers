'use strict';

exports.default = isCollection;

var _isArray = require('./isArray');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isCollection(coll) {
  return !!coll && ((0, _isArray2.default)(coll) || typeof coll.length !== 'undefined');
}