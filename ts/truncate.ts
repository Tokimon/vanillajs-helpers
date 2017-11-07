import isString from './isString';
import isNumber from './isNumber';



interface TruncateSettings {
  maxLength?: number,
  end?: string
}



/**
 * Limits a string to a given number of characters and adds '...' in the end
 */
export default function truncate(str: string, settings?: TruncateSettings): string {
  const { maxLength, end = '...' } = settings;
  if(!isString(str) || !isNumber(maxLength) || maxLength < 0) { return str; }
  return str.length <= maxLength ? str : `${str.substr(0, maxLength)}${end}`;
}
