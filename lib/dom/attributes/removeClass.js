'use strict';

import words from '../../iteration/words';

export default function removeClass(elm, classNames) {
  return words(classNames, cn => { elm.classList.remove(cn); });
}