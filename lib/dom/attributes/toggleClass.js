'use strict';

import words from '../../iteration/words';

export default function toggleClass(elm, classNames) {
  return words(classNames, cn => { elm.classList.toggle(cn); });
}