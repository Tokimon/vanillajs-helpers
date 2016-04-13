import limitDecimals from './limitDecimals';

/**
 * Formats a number with defined thousand and decimal seperator, and a decimal limit
 * (see 'limitDecimals.js' for details on `decCount`)
 * @param  {Number} num - Number to format
 * @param  {Number|String=2} decCount - Decimal limit expression (see 'limitDecimals.js' for details)
 * @param  {Char='.'} sep - Thousand seperator
 * @param  {Char=','} dec - Decimal seperator
 * @return {String} - Formated number
 */
export default function formatNumber(num, decCount=2, sep='.', dec=',') {
  if(isNaN(num)) { num = 0; }

  // Format the number to the desired number of decimals and split.
  const parts = `${limitDecimals(num, decCount)}`.split('.');

  // insert separator
  parts[0] = parts[0].replace(/(\d)(?=(\d{3})+$)/g, `$1${sep}`);

  // join with decimal delimiter
  return parts.join(dec);
}
