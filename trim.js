import isString from './isString';

export default function trim(str, char) {
  if(!isString(str)) { return ''; }
  if(!char) { return str.trim(); }
  return str.replace(new RegExp(`^[${char}]+|[${char}]+$`, 'g'), '');
}
