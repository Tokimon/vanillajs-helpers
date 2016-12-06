Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = phrasify;

var _isObject = require('./isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _isString = require('./isString');

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function convert(opts, str = '') {
  // Create space before uppercase letters (if it is an abbrivaition
  // - more than 1 letter - create space after as well)
  str = `${ str }`.replace(/([A-Z])([a-z])/g, m => ` ${ m }`);

  if (opts.numbers) {
    str = str.replace(/(\d+)/g, ' $1 ');
  }

  // Convert any non letter/number characters into a space
  // and remove trailing spaces
  return str.replace(/[^a-z0-9]+/gi, ' ').trim();
}

/**
 * Transform phrase into a dashed phrase
 * (eg. 'camelCase' -> 'camel-case' or 'spaced phrase' -> 'spaced-phrase')
 * @param {String} str - String to transform
 * @return {String} - Transformed string
 */
function phrasify(input = {}) {
  let opts = { numbers: false };
  if ((0, _isObject2.default)(input)) {
    opts = Object.assign(opts, input);
  }

  // Use the 'bind' method here to avoid creating a function inside a function
  const func = convert.bind(null, opts);

  return (0, _isString2.default)(input) ? func(input) : func;
}