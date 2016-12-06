Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trim;
exports.trimLeft = trimLeft;
exports.trimRight = trimRight;
/**
 * Trim given chars from boths sides of a string
 * @param  {String} str - String to trim
 * @param  {String} char - Char to trim off
 * @return {String} - Trimmed string
 */
function trim(str, char) {
  str = `${ str || '' }`;
  if (!char) {
    return str.trim();
  }
  if (char.source) {
    char = char.source;
  }
  return str.replace(new RegExp(`^${ char }+|${ char }+$`, 'g'), '');
}

/**
 * Trim given chars from the left side of a string
 * @param  {String} str - String to trim
 * @param  {String} char - Char to trim off
 * @return {String} - Trimmed string
 */
function trimLeft(str, char = '\\s') {
  if (char.source) {
    char = char.source;
  }
  return `${ str || '' }`.replace(new RegExp(`^${ char }+`, 'g'), '');
}

/**
 * Trim given chars from the right side of a string
 * @param  {String} str - String to trim
 * @param  {String} char - Char to trim off
 * @return {String} - Trimmed string
 */
function trimRight(str, char = '[\\s]') {
  if (char.source) {
    char = char.source;
  }
  return `${ str || '' }`.replace(new RegExp(`${ char }+$`, 'g'), '');
}