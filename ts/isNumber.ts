/**
 * Is the given object is a finite Number
 *
 * ```ts
 * isNumber(123); // -> true
 * isNumber(Infinity); // -> false
 * isNumber('123'); // -> false
 * ```
 *
 * @param obj - Object to test
 * @return - Whether the object a finite number or not
 */
export default function isNumber(num: any): boolean {
  if (Number.isFinite) { return Number.isFinite(num); }
  return (typeof num === 'number' || num instanceof Number) && isFinite(num as any);
}
