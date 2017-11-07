import isString from './isString';
import isFunction from './isFunction';
import indexloop from './indexloop';



/**
 * Iterate over each word in a phrase
 * (or return word count if no callback is given)
 */
export default function eachWord(phrase: string, cb?: Function, separator: RegExp|string = /[- _,]+/): number {
  const words = isString(phrase) ? phrase.split(separator) : [];
  return isFunction(cb) ? indexloop(words, cb) : words.length;
}
