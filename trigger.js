import words from './eachWord';

function _customEvent(evtName, data) {
  if(!window.createEvent) {
    return window.CustomEvent ? new CustomEvent(evtName, { detail: data }) : null;
  }

  // IE uses the deprecated way of doing CustomEvents
  const evt = window.createEvent('CustomEvent');
  evt.initCustomEvent(evtName, true, true, data);
  return evt;
}

export default function trigger(elm, eventNames, data) {
  return words(eventNames, (evtName) => elm.dispatchEvent(_customEvent(evtName, data)));
}
