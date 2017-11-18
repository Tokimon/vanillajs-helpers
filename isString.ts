import objectType from './objectType';



/**
 * Is the given object of type String
 */
export default function isString(obj: any): boolean {
  return typeof obj === 'string' || objectType(obj) === 'string';
}
