'use strict';

exports.default = eachWord;

var _isString = require('./isString');

var _isString2 = _interopRequireDefault(_isString);

var _iterate = require('./iterate');

var _iterate2 = _interopRequireDefault(_iterate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Iterate over each word in a phrase
 * @param  {String} phrase - String containing the words to iterate over
 * @param  {Function} cb - Method to call on each word
 * @param  {String|RegExp} [separator=' '] - Separator char/regular expression to split the words by
 * @return {Number} - Number of words iterated
 */
function eachWord(phrase, cb, separator = /[- _,]+/) {
  const words = (0, _isString2.default)(phrase) ? phrase.split(separator) : [];
  return cb ? (0, _iterate2.default)(words, cb) : words.length;
}