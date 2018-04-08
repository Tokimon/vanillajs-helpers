/**
 * Returns the objects type definition name (eg. [object String] => "string")
 *
 * ```ts
 * objectType('string'); // -> 'string'
 * objectType(123); // -> 'number'
 * objectType({}); // -> 'object'
 * ```
 *
 * @param obj - Object to get the type of
 * @return - String representation of the object type
 */
export default function objectType(obj: any): string {
  return Object.prototype.toString.call(obj).toLowerCase().match(/(\w+)]$/)[1];
}
