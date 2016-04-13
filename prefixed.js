/**
 * Add vendor prefixes to the string
 * @param  {String} str - String to add the vendor prefixes to
 * @return {Array<String>} Array of the various vendor prefixed versions of the string
 */
export default function prefixed(str) {
  return [ `webkit${str}`, `moz${str}`, `ms${str}`, `o${str}` ];
}
