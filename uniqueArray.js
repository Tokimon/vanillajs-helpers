import isArray from './isArray';
export default function uniqueArray(arr) {
    if (!isArray(arr)) {
        arr = arr ? [arr] : [];
    }
    return arr.filter((item, i, a) => a.indexOf(item) === i);
}
