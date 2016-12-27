import isObject from './isObject';
import isString from './isString';
import trim from './trim';

function convert(opts, str = '') {
  // Create space before uppercase letters (if it is an abbrivaition
  // - more than 1 letter - create space after as well)
  str = `${str}`.replace(/([A-Z])([a-z])/g, (m) => ` ${m}`);

  if(opts.numbers) { str = str.replace(/(\d+)/g, ' $1 '); }

  // Convert any non letter/number characters into a single space
  // and remove trailing spaces
  return trim(str.replace(/[^a-z\d]+/gi, ' '));
}

/**
 * @typedef {Object} Settings
 * @property {Boolean} numbers - Create space between numbers
 */

/**
 * Transform phrase into a space separated phrase
 * @param {String|Settings} str - String to transform or settings for the transformer method
 * @return {String|Function} - Transformed string or a transformer method
 */
export default function phrasify(input = {}) {
  let opts = { numbers: false };
  if(isObject(input)) { opts = Object.assign(opts, input); }

  // Use the 'bind' method here to avoid creating a function inside a function
  const func = convert.bind(null, opts);

  return isString(input) ? func(input) : func;
}
