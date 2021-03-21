/**
 * Is the given object is a finite Number
 *
 * @example
 * ```ts
 * isNumber(123); // -> true
 * isNumber(Infinity); // -> false
 * isNumber('123'); // -> false
 * ```
 *
 * @param obj - Object to test
 * @return - Whether the object a finite number or not
 */
export default function isNumber(obj: unknown): obj is number {
  return (typeof obj === 'number' || obj instanceof Number) && Number.isFinite(obj);
}
