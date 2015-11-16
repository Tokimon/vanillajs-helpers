'use strict';

// This is a fallback method to create event for browsers that doesn't support the CustomEvent object
// (You guessed it: IE)
// (http://caniuse.com/#search=CustomEvent)
function oldEvent(eventName, data) {
  const evt = document.createEvent('CustomEvent');
  // Normally the 'initCustomEvent' is depricated but not for IE apparently
  evt.initCustomEvent(eventName, true, true, data);
  return evt;
}

export function createEvent(eventName, data) {
  try { return new CustomEvent(eventName, { detail: data }); }
  catch(e) { return oldEvent(eventName, data); }
}

export function on(elm, eventName, handler) { elm.addEventListener(eventName, handler, true); }

export function off(elm, eventName, handler) { elm.removeEventListener(eventName, handler, true); }

export function trigger(elm, eventName, data) { elm.dispatchEvent(createEvent(eventName, data)); }

