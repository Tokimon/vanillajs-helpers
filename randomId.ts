/**
 * Generate a random id of designated length
 */
export default function randomId(length: number = 10): string {
  let id = '';
  while (id.length < length) { id += Math.random().toString(36).substr(2); }
  return id.substr(0, length);
}
