import isString from './isString';
import isFunction from './isFunction';
import indexloop from './indexloop';
export default function eachWord(phrase, cb, separator = /[- _,]+/) {
    const words = isString(phrase) ? phrase.split(separator) : [];
    return isFunction(cb) ? indexloop(words, cb) : words.length;
}
