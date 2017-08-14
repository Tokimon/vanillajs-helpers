import isArray from './isArray';
import isNumber from './isNumber';
import hex from './numberToHex';

/**
 * Converts a rgb(a) color to a hex color
 * @function RGBToHex
 * @param  {Number|Number[]} r  - Red color saturation (0-255) if Array it assumed to be the full RGB color
 * @param  {Number}         [g] - Green color saturation (0-255)
 * @param  {Number}         [b] - Blue color saturation (0-255)
 * @param  {Number}         [a] - Alpha channel percentage (0-1/0-100)
 * @return {String}             - Hex color representation ('#2fd466')
 */
export default function RGBToHex(r, g, b, a) {
  if(isArray(r)) { [r, g, b, a] = r; }
  a = isNumber(a) ? hex((a > 1 ? a / 100 : a) * 255) : '';
  return `#${hex(r)}${hex(g)}${hex(b)}${a}`;
}
