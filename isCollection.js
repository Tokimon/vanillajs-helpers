import isArray from './isArray';

export default function isCollection(coll) {
  return isArray(coll) || typeof coll.length !== 'undefined';
}
