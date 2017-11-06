import isArray from './isArray';
export default function isCollection(coll) {
    if (typeof coll === 'undefined' || coll === null) {
        return false;
    }
    return isArray(coll) || typeof coll.length !== 'undefined';
}
