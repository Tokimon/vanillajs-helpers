function c(): number { return Math.round(Math.random() * 255); }



/**
 * Generate a random RGB color
 */
export default function randomRGBColor(): number[] { return [c(), c(), c()]; }
