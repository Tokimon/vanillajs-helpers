import leadingZero from './leadingZero';



/**
 * Convert a number to a Hexadecimal representation (eg. 180 => b4)
 */
export default function numberToHex(num: number = 0): string {
  return leadingZero(Math.round(num).toString(16));
};
