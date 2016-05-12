/**
 * Transform a phrase into a camelCased word (eg. 'camel case' -> 'camelCase')
 * @param {String} str - String to transform
 * @param {String|RegExp=" "} separator - Separator between words
 * @return {String} - Transformed string
 */
export default function camelCase(str, separator = ' ') {
  if(separator instanceof RegExp) { separator = separator.source; }
  return str.replace(new RegExp(`${separator}+([a-z])`, 'gi'), (match, char) => char.toUpperCase());
}
