import isArray from './isArray';

/**
 * Filter out any duplicate values from an array
 * @param  {Array} arr - Array that needs unique values
 * @return {Array} - An Array with only unique values
 */
export default function uniqueArray(arr) {
  if(!isArray(arr)) { arr = arr ? [arr] : []; }
  return arr.filter((item, i, a) => a.indexOf(item) === i);
}
