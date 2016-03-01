'use strict';

import words from '../../iteration/words';

export default function addClass(elm, classNames) {
  return words(classNames, cn => { elm.classList.add(cn); });
}