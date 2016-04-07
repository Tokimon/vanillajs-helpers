import prefixed from './prefixed';

const div = document.createElement('div');
const _matchMethod = div.matches || prefixed('MatchesSelector').filter((method) => !!div[method])[0];

export default function matchesSelector(elm, selector) {
  return _matchMethod.call(elm, selector);
}
