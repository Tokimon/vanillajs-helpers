'use strict';

export default function off(elm, eventNames, handler) {
  return eventNames.split(' ').forEach((name) => elm.removeEventListener(name, handler, true));
}
