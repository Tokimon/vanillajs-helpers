// Shamelessly copied from:
// http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery

/**
 * Generates a unique hash code from a string
 * @param  {String} str - String to convert
 * @return {Number} - A Numeric hash code generated from the string
 */
export function hashCode(str) {
  // Math.abs added to make it a positive number
  return Math.abs(`${str}`.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0));
}



/**
 * Generates a unique hash string from a string
 * @param  {String} str - String to convert
 * @return {String} - The hashed string
 */
export default function hash(str) {
  const code = hashCode(str);
  return code ? code.toString(36) : '';
}
