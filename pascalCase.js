import camelCase from './camelCase';

/**
 * Transform a phrase into a PascalCased word (eg. 'pascal case' -> 'PascalCase')
 * @function pascalCase
 * @param {String} str - String to transform
 * @return {String} Transformed string
 */
export default function pascalCase(str) {
  return camelCase({ upper: true })(str);
}
