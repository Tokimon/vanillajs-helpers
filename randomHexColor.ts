import randomRGBColor from './randomRGBColor';
import RGBToHex from './RGBToHex';



/**
 * Generate a random HEX color
 */
export default function randomHexColor(): string {
  return RGBToHex(randomRGBColor());
}
