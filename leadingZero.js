// TODO: Should use a generic fill method for strings (to be created)

/**
 * Makes sure a given number is a certain length and fills excess space with zeroes (0)
 * @param  {Mixed} num - The Number to add zeroes before
 * @param  {Number} [len=2] - The Minimum length of the number
 * @return {String} - The Number converted into a string with zeroes added to it
 */
export default function leadingZero(num, len = 2) {
  len = Math.max(String(num).length, len);
  return `${Math.pow(10, len)}${num}`.substr(-len);
}
