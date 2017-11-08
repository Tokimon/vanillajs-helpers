import isString from './isString';
import isFunction from './isFunction';
import indexLoop from './indexLoop';



/**
 * Iterate over each word in a phrase
 * (or return word count if no callback is given)
 */
export default function eachWord(phrase: string, cb?: Function, separator: RegExp|string = /[- _,]+/): number {
  const words = isString(phrase) ? phrase.split(separator) : [];
  return isFunction(cb) ? indexLoop(words, cb) : words.length;
}
