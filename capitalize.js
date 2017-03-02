/**
 * Capitalize each word in a phrase
 * @param  {String} str - String to Capitalize
 * @return {String} - Capitalized string
 */
export default function capitalize(str) {
  return `${str || ''}`
    .replace(/(^|[\s-])(\w)/g, (m, before, char) => before + char.toUpperCase());
}
