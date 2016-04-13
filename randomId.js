/**
 * Generate a random id of designated length (max 36 chars)
 * @param  {Number=36} length - Length of the generated ID
 * @return {String} The generated ID
 */
export default function randomId(length=36) {
  return Math.random().toString(36).substr(2, length);
}
