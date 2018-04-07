/**
 * Makes sure a given number is a certain length and fills excess space with zeroes (0)
 *
 * ```ts
 * leadingZero(1); // -> '01'
 * leadingZero(123); // -> '123'
 * leadingZero(123, 5); // -> '00123'
 * ```
 *
 * @param num - Number to add leading zeroes to
 * @param len - linimum length of the returned string
 * @return - The given number as a string padded with zeroes to match the given min length
 */
export default function leadingZero(num: number | string, len: number = 2): string {
  len = Math.max(String(num).length, len);
  return `${Math.pow(10, len)}${num}`.substr(-len);
}
