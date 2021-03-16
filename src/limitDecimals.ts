import isString from './isString';



/**
 * Limit decimals of a floating number to specified length. The length depends on
 * `decimals` which can have the following settings (n = integer):
 *
 * Char | Description
 * ----- | -------------
 * **>n** | Minimum number of decimals, if the current number of decimals are shorter than the defined length, extra 0 (zeros) will be added.
 * **<n** | Maximum number of decimals, longer decimals will be rounded and shortened down to this number.
 * **n** | Match this exact number of decimals, rounding longer decimals and adding extra 0 (zeroes) to shorter ones.
 *
 * @example
 * ```ts
 * // Exact number of decimals
 * limitDecimals(123.4567) // -> 123.46
 * limitDecimals(123, 5) // -> 123.00000
 *
 * // Max number of decimals
 * limitDecimals(123.4567, '<3') // -> 123.457
 * limitDecimals(123, '<3') // -> 123
 *
 * // Min number decimals
 * limitDecimals(123.4, '>4') // -> 123.4000
 * limitDecimals(123.456789, '>4') // -> 123.456789
 * ```
 *
 * @param num - Number to limit the decimals on
 * @param decimals - Setting for how to handle the decimals
 * @return - String representation of the number with the decimals adjusted according to the decimal setting
 */
export default function limitDecimals(num: number | string, decimals: number | string = 2): string {
  num = isString(num)
    ? parseFloat(num as string)
    : num as number;

  if (isNaN(num)) { num = 0; }

  const countMatch = /^([<>])?(\d+)/.exec(decimals as string);
  let parts = `${num}`.split('.');
  let decLen = parts[1] ? parts[1].length : 0;
  let decCount = 0;

  if (countMatch) {
    const indicator = countMatch[1];
    decCount = Number(countMatch[2]);

    // minimum number of decimals
    if (indicator === '>' && decLen > decCount) {
      decCount = decLen;
    }

    // maximum number of decimals
    if (indicator === '<') {
      if (decLen < decCount) {
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
