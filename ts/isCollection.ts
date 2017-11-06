import isArray from './isArray';



/**
 * Determines whether a given object is a collection or not
 * (Object with length and numeric keys)
 */
export default function isCollection(coll: any): boolean {
  if(typeof coll === 'undefined' || coll === null) { return false; }
  return isArray(coll) || typeof coll.length !== 'undefined';
}
