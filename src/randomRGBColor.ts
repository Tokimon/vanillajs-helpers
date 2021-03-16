function c(): number { return Math.round(Math.random() * 255); }



/**
 * Generate a random RGB color
 *
 * @example
 * ```ts
 * randomRGBColor(); // -> eg. [169, 100, 52]
 * ```
 *
 * @return - An Array with random R G B values
 */
export default function randomRGBColor(): number[] { return [c(), c(), c()]; }
