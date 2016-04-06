import prefixed from '../utils/prefixed';

let _matchMethod;

export default function matchesSelector(elm, selector) {
  if(_matchMethod) { return _matchMethod.call(elm, selector); }

  if(typeof elm.matches === 'function') {
    _matchMethod = elm.matches;
  } else {
    prefixed('MatchesSelector').forEach((method) => {
      if(typeof elm[method] === 'function' && _matchMethod) {
        _matchMethod = elm[method];
      }
    });

    if(!_matchMethod) { _matchMethod = () => false; }
  }

  return matchesSelector(elm, selector);
}
