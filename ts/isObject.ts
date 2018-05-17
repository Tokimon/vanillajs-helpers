import objectType from './objectType';



/**
 * Is the given object of type String
 *
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
export default function isObject(obj: any): boolean {
  return objectType(obj) === 'object' && Object(obj) === obj;
}