import isString from './isString';
import isNumber from './isNumber';

export default function truncate(str, maxLength, end = '...') {
  if(!isString(str) || !isNumber(maxLength)) { return str; }
  return str.length <= maxLength ? str : `${str.substr(0, maxLength)}${end}`;
}
