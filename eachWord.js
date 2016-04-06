import each from './iterable';
export default function eachWord(phrase, cb) {
  return each(phrase.split(' '), cb);
}
