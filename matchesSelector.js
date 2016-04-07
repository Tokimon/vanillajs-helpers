import prefixed from './prefixed';

let _matchMethod;

export default function matchesSelector(elm, selector) {
  if(_matchMethod) { return _matchMethod.call(elm, selector); }

  _matchMethod = elm.matches || prefixed('MatchesSelector').filter((method) => !!elm[method])[0];
  if(!_matchMethod) { _matchMethod = () => false; }

  return matchesSelector(elm, selector);
}
