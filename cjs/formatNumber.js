'use strict';

exports.default = formatNumber;

var _limitDecimals = require('./limitDecimals');

var _limitDecimals2 = _interopRequireDefault(_limitDecimals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Formats a number with defined thousand and decimal separator, and a decimal limit
 * (see 'limitDecimals.js' for details on `decCount`)
 * @param  {Number} num - Number to format
 * @param  {Number|String} [decCount=2] - Decimal limitation expression (see 'limitDecimals' for details)
 * @param  {Char} [sep='.'] - Thousand separator
 * @param  {Char} [dec=','] - Decimal separator
 * @return {String} - Formatted number
 */
function formatNumber(num, decCount = 2, sep = '.', dec = ',') {
  // Format the number to the desired number of decimals and split.
  const parts = `${ (0, _limitDecimals2.default)(num, decCount) }`.split('.');

  // Insert separator
  parts[0] = parts[0].replace(/(\d)(?=(\d{3})+$)/g, `$1${ sep }`);

  // Join with decimal delimiter
  return parts.join(dec);
}