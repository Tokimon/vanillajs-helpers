/**
 * Is the given object an Array
 *
 * ```ts
 * isArray([1,2,3]); // -> true
 * isArray('string'); // -> false
 * ```
 *
 * @param obj - Object to test
 * @return - Whether the object an Array or not
 */
export default function isArray(obj: any): boolean {
  return Array.isArray(obj);
}
