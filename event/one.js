'use strict';

import on from './on';
import off from './off';
import words from '../iteration/words';

function onetrigger(eventName, handler) {
  return function _one(e) => {
    off(elm, eventName, _one);
    return handler(e);
  };
}

export default function one(elm, eventNames, handler) {
  return words(eventNames, (name) => {
    elm.addEventListener(name, onetrigger(name, handler), true);
  });
}

