'use strict';

exports.default = camelCase;

var _isObject = require('./isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _isString = require('./isString');

var _isString2 = _interopRequireDefault(_isString);

var _phrasify = require('./phrasify');

var _phrasify2 = _interopRequireDefault(_phrasify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function convert(opts, str = '') {
  return (0, _phrasify2.default)({ numbers: opts.numbers })(str).split(/\s+/).map((word, i) => {
    if (opts.abbr && /^[A-Z]+$/.test(word) || !word) {
      return word;
    }

    word = word.toLowerCase();
    if (i === 0 && opts.upper || i > 0) {
      word = word[0].toUpperCase() + word.substr(1);
    }

    return word;
  }).join('');
}

/**
 * Transform a phrase into a camelCased word (eg. 'camel case' -> 'camelCase')
 * @param {String|Object} input - String to transform or settings for the transformer method
 * @return {String|Function} - Transformed string or a transformer method
 */
function camelCase(input = {}) {
  let opts = { upper: false, abbr: false, numbers: true };
  if ((0, _isObject2.default)(input)) {
    opts = Object.assign(opts, input);
  }

  // Use the 'bind' method here to avoid creating a function inside a function
  const func = convert.bind(null, opts);

  return (0, _isString2.default)(input) ? func(input) : func;
}