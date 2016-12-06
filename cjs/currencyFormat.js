Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = currencyFormat;

var _formatNumber = require('./formatNumber');

var _formatNumber2 = _interopRequireDefault(_formatNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create a function that formats a number to a given currency format (eg. 1000 -> 1.000,00 €)
 * @param  {String} [thousand='1.000,00 €'] - Thousand descriptor template
 * @return {Function} Returns funtion that formats a give number into the given currency format
 */
function currencyFormat(thousand = '1.000,00 €') {
  const m = /^(\D*)1(\D*)000(\D*)(\d*)(\D*)$/.exec(thousand);
  if (m) {
    return num => `${ m[1] }${ (0, _formatNumber2.default)(num, m[4].length, m[2], m[3]) }${ m[5] }`;
  }
  return currencyFormat('1.000,00 €');
}