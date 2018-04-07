import isArray from './isArray';
import isNumber from './isNumber';
import hex from './numberToHex';



/**
 * Converts a Array of R G B (A) colors into a hex color.
 *
 * ```ts
 * RGBToHex([123, 123, 123]) // -> #7b7b7b
 *
 * // With alpha channel
 * RGBToHex([123, 123, 123, 0.5]) // -> #7b7b7b80
 * ```
 *
 * @param rgb - The R G B (A) color represented as an array
 * @return - A Hex representation of the given color
 */
export default function RGBToHex(rgb: number[]): string;

/**
 * Converts R G B (A) color arguments into a hex color.
 *
 * ```ts
 * // RGB as arguments
 * RGBToHex( 123, 123, 123 ) // -> #7b7b7b80
 *
 * // With alpha channel
 * RGBToHex( 123, 123, 123, 0.5 ) // -> #7b7b7b80
 * ```
 *
 * @param r - Red color
 * @param g - Green color
 * @param b - Blue color
 * @param a - Alpha channel
 * @return - A Hex representation of the given colors
 */
export default function RGBToHex(r: number, g: number, b: number, a?: number): string;

export default function RGBToHex(r: number | number[], g?: number, b?: number, a?: number): string {
  if (isArray(r)) { [r, g, b, a] = r as number[]; }
  const alpha = isNumber(a) ? hex(a! * 255) : '';
  return `#${hex(r as number)}${hex(g as number)}${hex(b as number)}${alpha}`;
}
