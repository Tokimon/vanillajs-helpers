import dashed from './dashed';

/**
 * Transform phrase into a snake_case phrase
 * (eg. 'camelCase' -> 'camel-case' or 'spaced phrase' -> 'spaced-phrase')
 * @param {String} str - String to transform
 * @return {String} - Transformed string
 */
export default function snakeCase(str, spaceNumbers) {
  return dashed(str, spaceNumbers).replace(/-+/g, '_');
}
