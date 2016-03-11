'use strict';

import isString from '../../util/objectType';

export default function prepend(context, node) {
  if( isString(node) ) { context.insertAdjacentHTML('afterbegin', node); }
  else if( node.nodeType ) { context.insertBefore(context.firstChild, node); }
}
