/**
 * Generate a random id of designated length
 * @function randomId
 * @param  {Number} [length=10] - Length of the generated ID
 * @return {String} A random generated string as a mix of characters and numbers
 */
export default function randomId(length = 10) {
  let id = '';
  while(id.length < length) { id += Math.random().toString(36).substr(2); }
  return id.substr(0, length);
}
