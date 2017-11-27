import isString from './isString';
import isFunction from './isFunction';
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
 */
export default function eachWord(phrase: string, cb: IndexLoopCallback, separator: RegExp|string = /[- _,]+/): number {
  const words = isString(phrase) ? phrase.split(separator) : [];
  return indexLoop(words, cb);
}
