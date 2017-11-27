import isString from './isString';



/**
 * Generates a unique numeric hash (DJB2) code from a string
 *
 * ```ts
 * hashCode('Hash this string'); // -> 1720121313
 * ```
 */
export function hashCode(str: string): number {
  str = isString(str) ? str : '';
  let l = str.length;
  if(l === 0) { return 0; }

  let h = 0;

  for(let i = 0; i < l; i++) {
    h = (((h << 5) - h) + str.charCodeAt(i)) | 0;
  }

  return (h >>> 0);
}



/**
 * Generates a unique hash (DJB2) string from a string
 *
 * ```ts
 * hash('Hash this string'); // -> sg463l
 * ```
 */
export default function hash(str: string): string {
  const code = hashCode(str);
  return code === 0 ? '' : code.toString(36);
}
