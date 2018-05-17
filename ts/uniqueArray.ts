/**
 * Filter out any duplicate values from an array
 *
 * ```ts
 * uniqueArray([1,2,3,1,4,5,3,7]); // -> [1,2,3,4,5,6,7]
 * ```
 *
 * @param arr - Array to filter on
 * @param settings - Settings to use with the truncation
 * @return - The truncated string
 */
export default function uniqueArray(arr: any[]): any[] {
  return arr.filter((item: any, i: number, a: any[]) => a.indexOf(item) === i);
}
