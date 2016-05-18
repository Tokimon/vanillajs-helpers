import camelCase from './camelCase';

/**
 * Transform a phrase into a PascalCased word (eg. 'pascal case' -> 'PascalCase')
 * @param {String} str - String to transform
 * @param {String=" "} separator - Separator between words
 * @return {String} - Transformed string
 */
export default function pascalCase(str) {
  return camelCase({ upper: true })(str);
}
