'use strict';

import words from '../../iteration/words';

export default function removeClass(elm, classNames, any = false) {
  let oks = 0;

  const total = words(classNames, cn => {
    const ok = elm.classList.contains(cn);
    if(ok) { oks++; return !any; }
  });

  return any ? !!oks : total === oks;
}
