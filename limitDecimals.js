/**
 * Limit decimals of a floating number to specified length. The length depends on
 * {decCount} which can have the following settings (n = integer):
 *
 * - >n = a minimum number of decimals, if the current number of decimals are
 *        shorter than the defined length, extra 0 (zeros) will be added.
 *
 * - <n = a maximum number of decimals, longer decimals will be rounded and
 *         shortened down to this number.
 *
 * -  n = match this exact number of decimals, rounding longer decimals and adding
 *        extra 0 (zeroes) to shorter ones.
 *
 * @param  {Number} num - Floating number to limit decimals on.
 * @param  {Number|String} decCount - Decimal count expression: [<|>]?n (eg. >2 or <5)
 * @return {String} As the decimal can contain extra 0 (zeroes) which would otherwise be cut away, the number is returned as a string
 */
export default function limitDecimals(num, decCount = 2) {
  num = parseFloat(num);
  if(isNaN(num)) { num = 0; }

  const countMatch = /^([<>])?(\d+)/.exec(decCount);
  let parts = `${num}`.split('.');
  let decLen = parts[1] ? parts[1].length : 0;

  decCount = countMatch ? +countMatch[2] : 0;

  // minimum number of decimals
  if(countMatch[1] === '>' && decLen > decCount) {
    decCount = decLen;
  }

  // maximum number of decimals
  if(countMatch[1] === '<') {
    if(decLen < decCount) {
      decCount = decLen;
    } else {
      num = +num.toFixed(decCount);
      parts = `${num}`.split('.');
      decLen = parts[1] ? parts[1].length : 0;
      decCount = decLen < decCount ? decLen : decCount;
    }
  }

  return num.toFixed(decCount);
}
