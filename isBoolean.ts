/**
 * Is the given object a boolean
 */
export default function isBoolean(obj: any): boolean {
  return obj === true || obj === false || obj instanceof Boolean;
}
