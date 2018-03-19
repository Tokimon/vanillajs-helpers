/**
 * Makes sure a given number is a certain length and fills excess space with zeroes (0)
 */
export default function leadingZero(num: number | string, len: number = 2): string {
  len = Math.max(String(num).length, len);
  return `${Math.pow(10, len)}${num}`.substr(-len);
}
