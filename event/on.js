'use strict';

export default function on(elm, eventNames, handler) {
  return eventNames.split(' ').forEach((name) => elm.addEventListener(name, handler, true));
}
