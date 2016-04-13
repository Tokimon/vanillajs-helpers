import iterate, { words } from './iterate';
import matches from './matchesSelector';
import randomId from './randomId';
import data from './data';
import { one, trigger } from 'eventSimple';

// The registry of bound events
// (necessary for advanced event handling)
const events = {};




/**
 * Helper funciton to find the elements event binding id
 * @param  {HTMLElement} elm - HTML Element to get the ID from
 * @return {String} - The elements event binding ID
 */
export function eventId(elm) {
  // On non HTML Elements (like window or document) we set a property instead of
  // using the data-eventlistid attribute
  let id = elm.nodeType ? data(elm, 'eventlistid') : elm._eventlistid;
  if(id) { return id; }

  id = randomId(10);

  if(elm.nodeType) { data(elm, 'eventlistid', id); }
  else { elm._eventlistid = id; }

  return id;
}




/**
 * Helper function to find all bound events on the element
 * (found from custom cache that only works if the handlers have been bound via
 * the 'on' method)
 * @param  {HTMLElement} elm - HTML Element events are bound to
 * @return {Object} - The collection of currently bound events
 */
export function getEvents(elm) {
  const id = eventId(elm);
  if(events[id]) { events[id] = {}; }
  return events[id];
}




// Internal method to trigger all bound handlers to an event
function triggerHandlers(e, target = e.target, elmEvents = getEvents(target), evtName = e.type) {
  iterate(elmEvents[evtName].handlers, (handler) => {
    if(handler.call(target, e) === false) {
      e.preventDefault();
      e.stopPropagation();
    }
  });
}

// Internal function to determine the function to use when event is fired
function callback(delegation) {
  if(!delegation) { return (e) => triggerHandlers(e, e.currentTarget); }

  return (e) => {
    // The target matches the delegation selector, so execute the handler
    if(matches(e.target, delegation)) { return triggerHandlers(e); }

    // Taget is a child of the delegation selector target, so loop up the parents
    // to find the right target
    if(matches(e.target, `${delegation} *`)) {
      let target = e.target.parentNode;
      while(!matches(target, delegation)) { target = target.parentNode; }
      triggerHandlers(e, target);
    }
  };
}

// Internal helper function to iterate each part of a namespaced event name
function eachEventNamespace(evtName, cb) {
  evtName.split('.').reduce((evt, part) => {
    evt = evt ? `${evt}.${part}` : part;
    cb(evt);
    return evt;
  }, '');
}




/**
 * Bind event handler for one or more event names (seperated by space).
 * (NOTE: in order to enable unbinding of delegates and all handlers for an event,
 * all events ar cached and an event caching id is set on the element via the
 * data-eventlistid or the _eventlistid property)
 * @param  {HTMLElement} elm - HTML Element to bind the event to
 * @param  {String} eventNames - Space seperated string of event names to bind the handler to
 * @param  {String} delegation - [optional] delegation handler
 * @param  {Function} handler - Handler to bind to the event(s)
 * @return {Number} - The number of event mentioned
 */
export default function on(elm, eventNames, delegation, handler) {
  // If only handler has been given as argument in the place of the delegation
  // selector, correct the variables
  if(typeof delegation === 'function') {
    handler = delegation;
    delegation = undefined;
  }

  const evts = getEvents(elm);
  const cb = callback(evts, delegation);

  return words(eventNames, (evtName) => {
    // go through event and namespaces
    eachEventNamespace(evtName, (evt) => {
      // If it hasn't been registered yet, create the entry and bind the event handler
      if(!evts[evt]) {
        evts[evt] = { cb, handlers: [handler] };
        elm.addEventListener(evt, cb, true);
      } else {
        // If it exists just add the hendler to the collection
        evts[evt].handlers.push(handler);
      }
    });
  });
}




/**
 * Unbinds events for the given element. If no handler function is defined it
 * removes all handlers for the given events. If no event names has been defined
 * it removes all events bound to the element.
 * (in order to remove all handlers on the element, all handlers must have been
 * bound via the 'on' method)
 * @param  {HTMLElement} elm - HTML Element to unbind the event from
 * @param  {String} eventNames - [optional] Space seperated string of event names to unbind the handler from
 * @param  {Function} handler - [optional] Handler to unbind from the event(s)
 * @return {Number} - The number of event mentioned
 */
export function off(elm, eventNames, handler) {
  const evts = getEvents(elm);

  eventNames = eventNames ? eventNames : Object.keys(evts);
  iterate(eventNames, (evtName) => {
    // go through event and namespaces
    eachEventNamespace(evtName, (evt) => {
      const evtObj = evts[evt];
      evtObj.handlers = !handler ? [] : evtObj.handlers.filter((boundHandler) => handler !== boundHandler);

      // If there are no more handlers bound to the current event, remove the
      // event handler and empty the event entry
      if(!evtObj.length) {
        elm.removeEventListener(evt, evtObj.cb, true);
        evts[evt] = null;
      }
    });
  });
}




// Export the Simple methods, as they are unchanged
export { one, trigger };
