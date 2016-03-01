'use strict';

import words from '../iteration/words';

export default function off(elm, eventNames, handler) {
  return words(eventNames, (name) => { elm.removeEventListener(name, handler, true); });
}
