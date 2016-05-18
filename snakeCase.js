import dashed from './dashed';

/**
 * Transform phrase into a snake_case phrase
 * @param {String} str - String to transform
 * @return {String} - Transformed string
 */
export default function snakeCase(str) {
  return dashed(str).replace(/-+/g, '_');
}
