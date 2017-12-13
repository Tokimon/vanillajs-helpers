/**
 * Split a String up into smaller strings of a give size (eg. 'ABCDEF' -> [AB,CD,EF])
 *
 * ```ts
 * chunkString('abcdefghijkl'); // -> ['ab', 'cd', 'ef', 'gh', 'ij', 'kl']
 * chunkString('abcdefghijkl', 4); // -> ['abcd', 'efgh', 'ijkl']
 * ```
 */
export default function chunkString(str: string, size: number = 2): string[] {
  return `${str || ''}`.match(new RegExp(`.{1,${size}}(?=\\B|$)`, 'g')) || [];
}
