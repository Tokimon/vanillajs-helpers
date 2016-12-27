import isObject from './isObject';
import isString from './isString';
import phrasify from './phrasify';

function convert(opts, str = '') {
  return phrasify({ numbers: opts.numbers })(str)
    .split(/\s+/).map((word, i) => {
      if((opts.abbr && /^[A-Z]+$/.test(word)) || !word) { return word; }

      word = word.toLowerCase();
      if((i === 0 && opts.upper) || i > 0) { word = word[0].toUpperCase() + word.substr(1); }

      return word;
    })
    .join('');
}

/**
 * @typedef {Object} Settings
 * @property {Boolean} numbers - Create space between numbers
 * @property {Boolean} abbr - Keep abbreviations upper cased
 * @property {Boolean} upper - Generate an upper cased CamelCase word
 */

/**
 * Transform a phrase into a camelCased word (eg. 'camel case' -> 'camelCase')
 * @param {String|Settings} input - String to transform or settings for the transformer method
 * @return {String|Function} - Transformed string or a transformer method
 */
export default function camelCase(input = {}) {
  let opts = { upper: false, abbr: false, numbers: true };
  if(isObject(input)) { opts = Object.assign(opts, input); }

  // Use the 'bind' method here to avoid creating a function inside a function
  const func = convert.bind(null, opts);

  return isString(input) ? func(input) : func;
}
