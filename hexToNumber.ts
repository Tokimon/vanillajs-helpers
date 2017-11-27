import isString from './isString';



/**
 * Convert Hexadecimal into a number (eg. b4 => 180)
 *
 * ```ts
 * hexToNumber('ba'); // -> 186
 * ```
 */
export default function hexToNumber(hex: string): number {
  return isString(hex) ? parseInt(hex, 16) : 0;
}
