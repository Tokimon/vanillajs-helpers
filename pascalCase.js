/**
 * Transform a phrase into a PascalCased word (eg. 'pascal case' -> 'PascalCase')
 * @param {String} str - String to transform
 * @param {String=" "} separator - Separator between words
 * @return {String} - Transformed string
 */
export function pascalCase(str, separator = ' ') {
  return str.toLowerCase().replace(new RegExp(`(?:^|${separator}+)([a-z])`, 'gi'), (match, char) => char.toUpperCase());
}
