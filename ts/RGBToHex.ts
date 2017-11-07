import isArray from './isArray';
import isNumber from './isNumber';
import hex from './numberToHex';



/**
 * Converts a rgb(a) color to a hex color.
 * Returns a Hex color representation (including #)
 */
export default function RGBToHex(r: number|number[], g?: number, b?: number, a?: number): string {
  if(isArray(r)) { [r, g, b, a] = r as number[]; }
  const alpha = isNumber(a) ? hex((a > 1 ? a / 100 : a) * 255) : '';
  return `#${hex(r as number)}${hex(g)}${hex(b)}${alpha}`;
}
