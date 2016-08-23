import isArray from './isArray';

export default function isCollection(coll) {
  return !!coll && (isArray(coll) || typeof coll.length !== 'undefined');
}
