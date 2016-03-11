'use strict';

function _customEvent(evtName, data) {
  if( !window.createEvent ) {
    return window.CustomEvent ? new CustomEvent(evtName, { detail: data }) : null;
  }

  // IE uses the deprecated way of doing CustomEvents
  const evt = window.createEvent('CustomEvent');
  evt.initCustomEvent(evtName, true, true, data);
  return evt;
}

export default function trigger(elm, eventNames, data) {
  return eventNames.split(' ').forEach((name) => elm.dispatchEvent(_customEvent(evtNames, data)));
}
