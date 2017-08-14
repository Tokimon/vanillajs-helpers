/**
 * Creates a string with a given character (or string) repeated x number of times
 * @function repeatString
 * @param  {String} char    - The character (or string) to repeat
 * @param  {Number} [len=0] - The max repetitions
 * @return {String}         - The repeated string
 */
export default function repeatString(char, len = 0) {
  return Array(len).fill(`${char}`).join('');
}
