/**
 * Returns the objects type definition name (eg. [object String] => "string")
 */
export default function objectType(obj: any): string {
  return Object.prototype.toString.call(obj).toLowerCase().match(/(\w+)]$/)[1];
}
