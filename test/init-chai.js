'use strict';

const expect = chai.expect;

(function( win ) {
  function oldEvent( eventName, data ) {
    const evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(eventName, true, true, data);
    return evt;
  }

  function createEvent( eventName, data ) {
    try { return new CustomEvent(eventName, { detail: data }); }
    catch(e) { return oldEvent(eventName, data); }
  }

  win._triggerEvent = function(elm, eventName) {
    elm.dispatchEvent(createEvent(eventName));
  };
})(window);


