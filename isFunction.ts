/**
 * Is the given object a Function
 *
 * ```ts
 * isFunction(() => {}); // -> true
 * isFunction('string'); // -> false
 * ```
 *
 * @param obj - Object to test
 * @return - Whether the object a Function or not
 */
export default function isFunction(obj: any): boolean {
  return typeof obj === 'function';
}
