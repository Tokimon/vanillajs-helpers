'use strict';

import attr from './attr';

export default function data(elm, dataName, value) {
  if(!dataName) { return null; }

  if(!elm.dataset) {
    // Fallback to getting/setting attribute
    return attr(elm, `data-${dataName}`, value);
  }

  const oldVal = elm.dataset[dataName];
  if(value) { elm.dataset[dataName] = value; }
  return oldVal;
}
