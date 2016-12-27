import isArray from './isArray';

/**
 * Determines whether a given object is a collection or not
 * (Object with length and numeric keys)
 * @param  {Mixed} coll - The object to examine
 * @return {Boolean} - Whether the object is a collection or not
 */
export default function isCollection(coll) {
  if(typeof coll === 'undefined' || coll === null) { return false; }
  return isArray(coll) || typeof coll.length !== 'undefined';
}
