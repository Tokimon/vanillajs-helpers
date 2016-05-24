import isObject from './isObject';
import isString from './isString';

function convert(opts, str = '') {
  // Create space before uppercase letters (if it is an abbrivaition
  // - more than 1 letter - create space after as well)
  str = `${str}`.replace(/([A-Z])([a-z])/g, (m) => ` ${m}`);

  if(opts.numbers) { str = str.replace(/(\d+)/g, ' $1 '); }

  // Convert any non letter/number characters into a space
  // and remove trailing spaces
  return str.replace(/[^a-z0-9]+/gi, ' ').trim();
}


/**
 * Transform phrase into a dashed phrase
 * (eg. 'camelCase' -> 'camel-case' or 'spaced phrase' -> 'spaced-phrase')
 * @param {String} str - String to transform
 * @return {String} - Transformed string
 */
export default function phrasify(input = {}) {
  let opts = { numbers: false };
  if(isObject(input)) { opts = Object.assign(opts, input); }

  // Use the 'bind' method here to avoid creating a function inside a function
  const func = convert.bind(null, opts);

  return isString(input) ? func(input) : func;
}
