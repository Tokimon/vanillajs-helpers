import isArray from './isArray';
import isNumber from './isNumber';
import hex from './numberToHex';



/**
 * Converts a rgb(a) color to a hex color.
 *
 * ```ts
 * // RGB as array
 * RGBToHex( [123, 123, 123] ) // -> #7b7b7b
 *
 * // RGB as arguments
 * RGBToHex( 123, 123, 123 ) // -> #7b7b7b80
 *
 * // With alpha channel
 * RGBToHex( 123, 123, 123, 0.5 ) // -> #7b7b7b80
 * ```
 */
export default function RGBToHex(r: number[]): string;
export default function RGBToHex(r: number, g: number, b: number, a?: number): string;
export default function RGBToHex(r: number | number[], g?: number, b?: number, a?: number): string {
  if (isArray(r)) { [r, g, b, a] = r as number[]; }
  const alpha = isNumber(a) ? hex(a! * 255) : '';
  return `#${hex(r as number)}${hex(g)}${hex(b)}${alpha}`;
}
