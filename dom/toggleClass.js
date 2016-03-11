'use strict';

export default function toggleClass(elm, classNames) {
  return classNames.forEach(cn => elm.classList.toggle(cn));
}