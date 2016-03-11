'use strict';

export default function find(selector, context = document, one=false) {
  let m, nodes;

  // classname(s)
  if(m = /^[.\w-]+$/.exec(selector)) {
    nodes = context.getElementsByClassName(m[0].replace(/\./g, ' '));
  }
  // Tag or ID
  else if( m = /^(#)?([\w-]+)$/.exec(selector) ) {
    nodes = context[`getElement${m[1] ? 'ById' : 'sByTagName'}`](m[2]);
  }
  // name selection
  else if( m = /^[\[]name=["']?([^'"\]]+)["']?[\]]$/i.exec(selector) ) {
    nodes = context.getElementsByName(m[1]);
  }
  // query selection
  else {
    nodes = context[`querySelector${one ? '' : 'All'}`](selector);
  }

  return one ? (isNaN(nodes.length) ? nodes : nodes[0]) : [...nodes];
}
