'use strict';

import isString from 'lodash/isString';
import children from '../traversing/children';

export default function htmlToDom( html ) {
  if( !isString(html) ) { return null; }
  const div = document.createElement('div');
  div.innerHTML = html;
  return children(div);
}
