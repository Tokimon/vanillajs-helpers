/**
 * Split a String up into smaller strings of a give size (eg. 'ABCDEF' -> [AB,CD,EF])
 * @param  {String} [str=''] String to split into smaller parts
 * @param  {Number} [size=2] The length of each chunk
 * @return {Array} String split up in smaller string of the given size
 */
export default function chunkString(str, size = 2) {
  return `${str || ''}`.match(new RegExp(`.{1,${size}}(?=\\B|$)`, 'g')) || [];
}
