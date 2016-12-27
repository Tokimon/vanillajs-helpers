/**
 * Trim given chars from both sides of a string
 * @param  {String} str - String to trim
 * @param  {String} [char] - Char to trim off
 * @return {String} - Trimmed string
 */
export default function trim(str, char) {
  str = `${str || ''}`;
  if(!char) { return str.trim(); }
  if(char.source) { char = char.source; }
  return str.replace(new RegExp(`^${char}+|${char}+$`, 'g'), '');
}



/**
 * Trim given chars from the left side of a string
 * @param  {String} str - String to trim
 * @param  {String} char - Char to trim off
 * @return {String} - Trimmed string
 */
export function trimLeft(str, char = '\\s') {
  if(char.source) { char = char.source; }
  return `${str || ''}`.replace(new RegExp(`^${char}+`, 'g'), '');
}



/**
 * Trim given chars from the right side of a string
 * @param  {String} str - String to trim
 * @param  {String} char - Char to trim off
 * @return {String} - Trimmed string
 */
export function trimRight(str, char = '\\s') {
  if(char.source) { char = char.source; }
  return `${str || ''}`.replace(new RegExp(`${char}+$`, 'g'), '');
}
