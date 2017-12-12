import isString from './isString';



/**
 * Limit decimals of a floating number to specified length. The length depends on
 * `decimals` which can have the following settings (n = integer):
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
export default function limitDecimals(num: number|string, decimals: number|string = 2): string {
  if(!num) { num = 0; }
  num = isString(num) ? parseFloat(<string> num) : <number> num;
  if(isNaN(<number> num)) { num = 0; }

  const countMatch = /^([<>])?(\d+)/.exec(decimals as string);
  let parts = `${num}`.split('.');
  let decLen = parts[1] ? parts[1].length : 0;
  let decCount = 0;

  if(countMatch) {
    const indicator = countMatch[1];
    decCount = Number(countMatch[2]);

    // minimum number of decimals
    if(indicator === '>' && decLen > decCount) {
      decCount = decLen;
    }

    // maximum number of decimals
    if(indicator === '<') {
      if(decLen < decCount) {
        decCount = decLen;
      } else {
        num = Number(num.toFixed(decCount));
        parts = `${num}`.split('.');
        decLen = parts[1] ? parts[1].length : 0;
        decCount = decLen < decCount ? decLen : decCount;
      }
    }
  }


  return num.toFixed(decCount);
}
