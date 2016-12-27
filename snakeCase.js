import dashed from './dashed';

/**
 * Transform phrase into a snake_case phrase
 * (eg. 'camelCase' -> 'camel-case' or 'spaced phrase' -> 'spaced-phrase')
 * @param {String} str - String to transform
 * @param {Boolean} separateNumbers - Add underscore before numbers
 * @return {String} - Transformed string
 */
export default function snakeCase(str, separateNumbers) {
  return dashed(str, separateNumbers).replace(/-+/g, '_');
}
