/**
 * Transform camelCased word or a phrase into a dashed phrase
 * (eg. 'camelCase' -> 'camel-case' or 'spaced phrase' -> 'spaced-phrase')
 * @param {String} str - String to transform
 * @return {String} - Transformed string
 */
export default function dashed(str) {
  return (str || '').replace(/([A-Z])/g, ' $1')
            .trim().replace(/\s+/g, '-')
            .toLowerCase();
}
