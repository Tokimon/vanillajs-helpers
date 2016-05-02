import iterate from './iterate';

/**
 * Iterate over each word in a phrase
 * @param  {String} phrase - String containing the words to iterate over
 * @param  {Function} cb - Method to call on each word
 * @param  {String|RegExp} [separator=' '] - Separator char/regular expression to split the words by
 * @return {Number} - Number of words iterated
 */
export function eachWord(phrase, cb, seperator = ' ') {
  return iterate(phrase.split(seperator), cb);
}
