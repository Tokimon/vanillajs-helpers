import objectType from './objectType';



/**
 * Is the given object of type String
 */
export default function isObject(obj: any): boolean {
  return objectType(obj) === 'object' && Object(obj) === obj;
}
