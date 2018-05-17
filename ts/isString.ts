import objectType from './objectType';



/**
 * Is the given object of type String
 *
 * ```ts
 * isString('string'); // -> true
 * isString(123); // -> false
 * ```
 *
 * @param obj - Object to test
 * @return - Whether the object a string or not
 */
export default function isString(obj: any): boolean {
  return typeof obj === 'string' || objectType(obj) === 'string';
}