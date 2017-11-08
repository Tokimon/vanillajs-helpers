import isString from './isString';



/**
 * Generates a unique hash code from a string using the DJB2 method
 * (similar to Java's String.hashCode())
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
 * Generates a unique hash string from a string
 */
export default function hash(str: string): string {
  const code = hashCode(str);
  return code === 0 ? '' : code.toString(36);
}
