import isString from './isString';
export function hashCode(str) {
    str = isString(str) ? str : '';
    let l = str.length;
    if (l === 0) {
        return 0;
    }
    let h = 0;
    for (let i = 0; i < l; i++) {
        h = (((h << 5) - h) + str.charCodeAt(i)) | 0;
    }
    return (h >>> 0);
}
export default function hash(str) {
    return hashCode(str).toString(36);
}
