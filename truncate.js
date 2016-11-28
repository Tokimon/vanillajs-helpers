import isString from './isString';
import isNumber from './isNumber';

/**
 * Limits a string to a given number of characters and adds '...' after
 * @param  {String} str - The string to limit
 * @param  {Number} maxLength - Max length allowed for the string
 * @param  {String} [end='...'] - String to add at the end of the string if the string has been truncated
 * @return {Mixed|String} - Trimmed down string or the object given if it is not a string
 */
export default function truncate(str, maxLength, end = '...') {
  if(!isString(str) || !isNumber(maxLength)) { return str; }
  return str.length <= maxLength ? str : `${str.substr(0, maxLength)}${end}`;
}
