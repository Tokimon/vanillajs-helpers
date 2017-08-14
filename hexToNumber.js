/**
 * Convert Hexadecimal into a number (eg. b4 => 180)
 * @function hexToNumber
 * @param  {String} hex - The Hexadecimal to convert
 * @return {Number}     - The converted number
 */
export default (hex) => parseInt(hex, 16);
