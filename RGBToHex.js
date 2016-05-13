function hex(num = 0) { return (0 + num.toString(16)).substr(-2); }

/**
 * Converts a rgb color to a hex color
 * @param  {Number|Array} r - Red color saturation (0-255)
 * @param  {Number}       g - Green color saturation (0-255)
 * @param  {Number}       b - Blue color saturation (0-255)
 * @return {String}         - Hex color representation ('#2fd466')
 */
export default function RGBToHex(r, g, b) {
  if(Array.isArray(r)) { [r, g, b] = r; }
  return `#${hex(r)}${hex(g)}${hex(b)}`;
}
