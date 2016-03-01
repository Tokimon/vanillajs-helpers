'use strict';

import filter from 'lodash/filter'

export function children(elm) {
  if(!elm) { return []; }
  if(elm.children) { return elm.children; }
  return filter(elm.childNodes, (child) => child.nodeType === 1);
}