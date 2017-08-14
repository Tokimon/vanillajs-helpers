import repeatString from './repeatString';

/**
 * Pads a string to the right with a given character (the inverse of leftPad)
 * @param  {String} str        - The string to pad
 * @param  {Number} len        - A minimum lenth of the string
 * @param  {String} [char=' '] - The character to pad the string with
 * @return {String}            - The padded string
 */
export default function rightPad(str, len = 0, char = ' ') {
  str = `${str}`;
  const strLen = str.length;
  return strLen >= len ? str : `${str}${repeatString(char, len - strLen)}`;
}
