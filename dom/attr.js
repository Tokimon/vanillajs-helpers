'use strict';

export default function attr(elm, attrName, value) {
  const oldVal = elm.getAttribute(attrName);
  if(value) { elm.setAttribute(attrName, value); }
  return oldVal;
}
