import phrasify from './phrasify';

/**
 * Transform phrase into a dashed phrase
 * (eg. 'camelCase' -> 'camel-case' or 'spaced phrase' -> 'spaced-phrase')
 * @param {String} str - String to transform
 * @param {Boolean} [dashNumbers] - Create dash around numbers
 * @return {String} - Transformed string
 */
export default function dashed(str, dashNumbers) {
  return phrasify({ numbers: !!dashNumbers })(str)
    .toLowerCase()
    .replace(/\s+/g, '-');
}
