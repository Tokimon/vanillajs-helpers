import isString from './isString';

export default function trimRight(str, char = '\\s\\n\\r') {
  if(!isString(str)) { return ''; }
  return str.replace(new RegExp(`[${char}]+$`, 'g'), '');
}
