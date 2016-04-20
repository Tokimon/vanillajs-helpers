/**
 * Transform a phrase into a camelCased word (eg. 'camel case' -> 'camelCase')
 * @param {String} str - String to transform
 * @param {String=" "} separator - Separator between words
 * @return {String} - Transformed string
 */
export function camelCase(str, separator = ' ') {
  return str.toLowerCase().replace(new RegExp(`${separator}+([a-z])`, 'gi'), (match, char) => char.toUpperCase());
}
