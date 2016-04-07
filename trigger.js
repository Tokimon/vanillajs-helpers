import words from './eachWord';

// TODO: Add suport for triggering native event
//  https://developer.mozilla.org/en-US/docs/Web/API/document.createEvent

function _customEvent(evtName, data) {
  if(window.CustomEvent) {
    return new CustomEvent(evtName, { detail: data });
  }

  // IE uses the deprecated way of doing CustomEvents
  const evt = window.createEvent('CustomEvent');
  evt.initCustomEvent(evtName, true, true, data);
  return evt;
}

export default function trigger(elm, eventNames, data) {
  return words(eventNames, (evtName) => elm.dispatchEvent(_customEvent(evtName, data)));
}
