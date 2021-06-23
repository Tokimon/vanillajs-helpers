import objectType from './objectType';



/**
 * Is the given object of type String
 *
 * @example
 * ```ts
 * class Obj {}
 *
 * isObject({}); // -> true
 * isObject(new Obj()); // -> true
 * isObject('123'); // -> false
 * ```
 *
 * @param obj - Object to test
 * @return - Whether the object a plain object or not
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export default function isObject(obj: unknown): obj is object {
  return objectType(obj) === 'object' && Object(obj) === obj;
}
