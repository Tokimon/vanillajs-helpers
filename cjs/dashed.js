'use strict';

exports.default = dashed;

var _phrasify = require('./phrasify');

var _phrasify2 = _interopRequireDefault(_phrasify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Transform phrase into a dashed phrase
 * (eg. 'camelCase' -> 'camel-case' or 'spaced phrase' -> 'spaced-phrase')
 * @param {String} str - String to transform
 * @return {String} - Transformed string
 */
function dashed(str, spaceNumbers = false) {
  return (0, _phrasify2.default)({ numbers: spaceNumbers })(str).toLowerCase().replace(/\s+/g, '-');
}