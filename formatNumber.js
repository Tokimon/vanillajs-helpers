import limitDecimals from './limitDecimals';

/**
 * Formats a number with defined thousand and decimal separator, and a decimal limit
 * (see 'limitDecimals.js' for details on `decCount`)
 * @param  {Number} num - Number to format
 * @param  {Number|String} [decCount=2] - Decimal limitation expression (see 'limitDecimals' for details)
 * @param  {Char} [sep='.'] - Thousand separator
 * @param  {Char} [dec=','] - Decimal separator
 * @return {String} - Formatted number
 */
export default function formatNumber(num, decCount = 2, sep = '.', dec = ',') {
  // Format the number to the desired number of decimals and split.
  const parts = `${limitDecimals(num, decCount)}`.split('.');

  // Insert separator
  parts[0] = parts[0].replace(/(\d)(?=(\d{3})+$)/g, `$1${sep}`);

  // Join with decimal delimiter
  return parts.join(dec);
}
