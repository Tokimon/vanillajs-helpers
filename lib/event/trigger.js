'use strict';

export default function trigger(elm, eventNames, data) {
  return words(eventNames, (name) => { elm.dispatchEvent(new CustomEvent(eventName, { detail: data })); });
}
