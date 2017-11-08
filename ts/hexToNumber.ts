/**
 * Convert Hexadecimal into a number (eg. b4 => 180)
 */
export default function hexToNumber(hex: string): number {
  return hex ? parseInt(hex, 16) : 0;
}
