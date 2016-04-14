/**
 * Transform a phrase into a camelCased word (eg. 'camel case' -> 'camelCase')
 * @param {String} str - String to transform
 * @param {String=" "} separator - Separator between words
 * @return {String} - Transformed string
 */
export function camelCase(str, separator = ' ') {
  return str.replace(new RegExp(`${separator}[a-z]`, 'gi'), (m) => m[1].toUpperCase());
}




/**
 * Transforms a string into a PascalCased word (eg. 'pascal case' -> 'PascalCase')
 * @param {String} str - String to transform
 * @param {String=" "} separator - Separator between words
 * @return {String} - Transformed string
 */
export function pascalCase(str, separator = ' ') {
  str = camelCase(str, separator);
  return str[0].toUpperCase() + str.substr(1);
}
