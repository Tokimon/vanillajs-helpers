import leadingZero from './leadingZero';

/**
 * Convert a number to a Hexadecimal representation (eg. 180 => b4)
 * @function numberToHex
 * @param  {Number} [num = 0] - The number to convert
 * @return {String}           - The Hexadecimal representation ('b4')
 */
export default (num = 0) => leadingZero(Math.round(num).toString(16));
