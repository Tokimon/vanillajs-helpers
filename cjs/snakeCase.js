'use strict';

exports.default = snakeCase;

var _dashed = require('./dashed');

var _dashed2 = _interopRequireDefault(_dashed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Transform phrase into a snake_case phrase
 * (eg. 'camelCase' -> 'camel-case' or 'spaced phrase' -> 'spaced-phrase')
 * @param {String} str - String to transform
 * @return {String} - Transformed string
 */
function snakeCase(str, spaceNumbers) {
  return (0, _dashed2.default)(str, spaceNumbers).replace(/-+/g, '_');
}