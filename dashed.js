/**
 * Transform phrase into a dashed phrase
 * (eg. 'camelCase' -> 'camel-case' or 'spaced phrase' -> 'spaced-phrase')
 * @param {String} str - String to transform
 * @return {String} - Transformed string
 */
export default function dashed(str = '') {
  return `${str}`
    // Create space around numbers
    .replace(/(\d+)/g, ' $1 ')
    // Create space before uppercase letters (if it is an abbrivaition
    // - more than 1 letter - create space after as well)
    .replace(/[A-Z]+/g, (m) => m.length > 1 ? ` ${m} ` : ` ${m}`)
    // Convert any non letter/number characters into a single dash
    .replace(/[^a-z0-9]+/gi, '-')
    // Remove trailing dashes
    .replace(/^[-]+|[-]+$/gi, '')
    // Make everything lower case
    .toLowerCase();
}
