/**
 * Convert Hexadecimal into a number (eg. b4 => 180)
 */
export default function hexToNumber(hex: string): number {
  return parseInt(hex, 16);
}
