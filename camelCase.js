import isObject from './isObject';
import isString from './isString';

function convert(opts, str) {
  if(!isString(str)) { return ''; }

  str = str
    // Make space around numbers
    .replace(/(\d+)/g, ' $1 ')
    // Make space before ant series of upper case letters (ex. abbreviations)
    // - Turn them into a capitalized word if `opts.abbr` is false
    .replace(/[A-Z]+/g, (m) => ` ${opts.abbr ? m : m[0] + m.substr(1).toLowerCase()}`)
    // Trim non letters/digits
    .replace(/^[^\w\d]+|[^\w\d]+$/i, '');

  if(opts.upper) {
    // If upper CamelCase, the make sure the first letter is upper cased
    str = str[0].toUpperCase() + str.substr(1);
  } else if(opts.abbr) {
    // If we keep abbriviations but do not create a lower camelCase word,
    // we should only make the first word lower case if it is not a longer
    // series of upper case letters
    str = str.replace(/^[A-Z]+/, (m) => m.length > 1 ? m : m.toLowerCase())
  } else {
    // If lower camelCase and we do not keep abbrivitaions,
    // make sure the first word is always lower case
    str = str.replace(/^\w+/i, (m) => m.toLowerCase());
  }

  // Combine the words again removing any non letter or digit and making the following letter upper case
  return str.replace(/[^\w\d]+([\w\d])/gi, (m, char) => char.toUpperCase());
}

/**
 * Transform a phrase into a camelCased word (eg. 'camel case' -> 'camelCase')
 * @param {String|Object} input - String to transform or settings for the transformer method
 * @return {String|Function} - Transformed string or a transformer method
 */
export default function camelCase(input) {
  let opts = { upper: false, abbr: false };
  if(isObject(input)) { opts = Object.assign(opts, input); }

  // Use the 'bind' method here to avoid creating a function inside a function
  const func = convert.bind(null, opts);

  return isString(input) ? func(input) : func;
}
