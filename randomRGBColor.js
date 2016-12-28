function c() { return Math.round(Math.random() * 255); }

/**
 * Generate a random RGB color
 * @function randomRGBColor
 * @return {Array} Three random numbers from 0-255 as an array ([r, g, b])
 */
export default function randomRGBColor() { return [c(), c(), c()]; }
