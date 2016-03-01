'use strict';

export default function find(selector, context = document, first = false) {
  let m, res;

  if(m = /^[.\w-]+$/.exec(selector)) {
    res = context.getElementsByClassName(m[0].replace(/\./g, ' '));
  } else if( m = /^(#)?([\w-]+)$/.exec(selector) ) {
    if(m[1]) { return context.getElementById(m[2]); }
    res = context.getElementsByTagName(m[2]);
  } else if( m = /^[\[]name=["']?([^'"\]]+)["']?[\]]$/i.exec(selector) ) {
    res = context.getElementsByName(m[1]);
  }

  if( res ) { return first ? res[0] : res; }

  const queryMethod = `querySelector${first ? '' : 'All'}`;
  return context[queryMethod](selector);
}
