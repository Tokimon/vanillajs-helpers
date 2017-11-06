import isString from './isString';
import isNumber from './isNumber';
export default function truncate(str, settings) {
    const { maxLength, end = '...' } = settings;
    if (!isString(str) || !isNumber(maxLength) || maxLength < 0) {
        return str;
    }
    return str.length <= maxLength ? str : `${str.substr(0, maxLength)}${end}`;
}
