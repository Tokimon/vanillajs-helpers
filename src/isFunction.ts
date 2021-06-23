/**
 * Is the given object a Function
 *
 * @example
 * ```ts
 * isFunction(() => {}); // -> true
 * isFunction('string'); // -> false
 * ```
 *
 * @param obj - Object to test
 * @return - Whether the object a Function or not
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export default function isFunction(obj: unknown): obj is Function {
  return typeof obj === 'function';
}
