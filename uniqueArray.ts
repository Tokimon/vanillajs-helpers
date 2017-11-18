import isArray from './isArray';



/**
 * Filter out any duplicate values from an array
 */
export default function uniqueArray(arr: any|any[]): any[] {
  if(!isArray(arr)) { arr = arr ? [arr] : []; }
  return arr.filter((item: any, i: number, a: any[]) => a.indexOf(item) === i);
}
