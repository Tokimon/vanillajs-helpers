/**
 * Split a String up into smaller strings of a give size (eg. 'ABCDEF' -> [AB,CD,EF])
 */
export default function chunkString(str?: string, size: number = 2): string[] {
  return `${str || ''}`.match(new RegExp(`.{1,${size}}(?=\\B|$)`, 'g')) || [];
}
