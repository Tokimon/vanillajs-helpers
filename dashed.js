import phrasify from './phrasify';

/**
 * Transform phrase into a dashed phrase
 * (eg. 'camelCase' -> 'camel-case' or 'spaced phrase' -> 'spaced-phrase')
 * @param {String} str - String to transform
 * @return {String} - Transformed string
 */
 export default function dashed(str, spaceNumbers = false) {
   return phrasify({ numbers: spaceNumbers })(str)
    .toLowerCase()
    .replace(/\s+/g, '-');
 }
