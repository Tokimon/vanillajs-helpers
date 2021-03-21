/**
 * Is the given object a boolean
 *
 * @example
 * ```ts
 * isBoolean(false); // -> true
 * isBoolean('string'); // -> false
 * ```
 *
 * @param obj - Object to test
 * @return - Whether the object a Boolean or not
 */
export default function isBoolean(obj: unknown): obj is boolean {
  return obj === true || obj === false || obj instanceof Boolean;
}
