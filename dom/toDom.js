'use strict';

import children from '../traversing/children';
import { isString } from '../utils/objectType';

export default function htmlToDom( html ) {
  if( !isString(html) ) { return html; }
  const div = document.createElement('div');
  div.innerHTML = html;
  return children(div);
}
