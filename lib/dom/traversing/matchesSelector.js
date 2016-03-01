'use strict';

import each from 'lodash/each';
import isFunc from 'lodash/isFunction';

let _matches;

export default function matchesSelector( elm, selector ) {
  if( _method ) { return _matches.call(elm, selector); }

  if( isFunc(elm.matches) ) {
    _matches = elm.matches;
  } else {
    _matches = () => {};

    each(prefixed('MatchesSelector'), (method) => {
      if( isFunc(elm[method]) ) {
        _matches = elm[method];
        return false;
      }
    });
  }

  return matchesSelector(elm, selector);
}
