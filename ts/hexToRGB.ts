import chunkString from './chunkString';
import hexToNumber from './hexToNumber';



/**
 * Converts a Hexadecimal color to a RGB(A) color array
 */
export default function hexToRGB(hex: string): number[] {
  if(hex[0] === '#') { hex = hex.substr(1); }

  const rgb = chunkString(hex, hex.length <= 4 ? 1 : 2)
    .map((c) => hexToNumber(c.length > 1 ? c : `${c}${c}`));

  if(rgb.length > 3) {
    rgb[3] = parseFloat(((rgb[3] || 255) / 255).toFixed(2));
  }

  return rgb;
}
