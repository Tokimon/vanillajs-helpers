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
 */
export default function limitDecimals(num: number|string, decCount: number|string = 2): string {
  num = parseFloat(num as string);
  if(isNaN(num)) { num = 0; }

  const countMatch = /^([<>])?(\d+)/.exec(decCount as string);
  let parts = `${num}`.split('.');
  let decLen = parts[1] ? parts[1].length : 0;

  decCount = countMatch ? Number(countMatch[2]) : 0;

  // minimum number of decimals
  if(countMatch[1] === '>' && decLen > decCount) {
    decCount = decLen;
  }

  // maximum number of decimals
  if(countMatch[1] === '<') {
    if(decLen < decCount) {
      decCount = decLen;
    } else {
      num = Number(num.toFixed(decCount));
      parts = `${num}`.split('.');
      decLen = parts[1] ? parts[1].length : 0;
      decCount = decLen < decCount ? decLen : decCount;
    }
  }

  return num.toFixed(decCount);
}
