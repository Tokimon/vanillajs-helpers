import isString from './isString';
import indexLoop, { IndexLoopCallback } from './indexLoop';



/**
 * Iterate over each word in a phrase
 * (or return word count if no callback is given)
 *
 * ```ts
 * // Default seperator
 * const count = eachWord('Hello JS-World', word => console.log(word));
 * // Hello ... JS ... World
 * // count === 3
 *
 * // With specified separator
 * const count = eachWord('Hello JS World-Championship', word => console.log(word), ' ');
 * // Hello ... JS-World
 * // count === 2
 * ```
 *
 * @param phrase - Phrase to loop over
 * @param cb - Callback function to call on every iteration
 * @param seperator - Expression to determine seperation of words
 * @return - Number of words in the phrase (length of looped array)
 */
export default function eachWord(phrase: string, cb: IndexLoopCallback, separator: RegExp | string = /[- _,]+/): number {
  const words = (isString(phrase) ? phrase.split(separator) : []).filter((word) => !!word);
  return indexLoop(words, cb);
}
