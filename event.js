import iterate, { words } from './iterate';
import matches from './matchesSelector';
import randomId from './randomId';
import data from './data';

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
function triggerHandlers(e, handlers = [], target = e.target) {
  iterate(handlers, (handler) => {
    if(handler.call(target, e) === false) {
      e.preventDefault();
      e.stopPropagation();
    }
  });
}

// Internal function to determine the function to use when event is fired
function callback(e) {
  const elmEvents = getEvents(e.currentTarget);
  if(!elmEvents) { return; }

  const evt = elmEvents[e.type];
  if(!evt) { return; }

  const handlers = evt.handlers;
  const delegates = evt.delegates;

  if(handlers) { triggerHandlers(e, handlers, e.currentTarget); }

  if(delegates) {
    let target = e.target;
    iterate(Object.keys(delegates), (delegation) => {
      // The target matches the delegation selector, so execute the handler
      if(matches(target, delegation)) { return triggerHandlers(e, delegates, target); }

      // Taget is a child of the delegation selector target, so loop up the parents
      // to find the right target
      if(matches(target, `${delegation} *`)) {
        target = target.parentNode;
        while(!matches(target, delegation)) { target = target.parentNode; }
        triggerHandlers(e, delegates, target);
      }
    });
  }
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

  return words(eventNames, (evtName) => {
    // go through event and namespaces
    eachEventNamespace(evtName, (evt) => {
      // If it hasn't been registered yet, create the entry and bind the event handler
      if(!evts[evt]) {
        evts[evt] = { handlers: [], delegates: {} };
        elm.addEventListener(evt, callback, true);
      }

      // If it exists just add the hendler to the collection
      if(!delegation) {
        evts[evt].handlers.push(handler);
      } else {
        const delegates = evts[evt].delegates;
        if(!delegates[delegation]) { delegates[delegation] = []; }
        delegates[delegation].push(handler);
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
export function off(elm, eventNames, delegation, handler) {
  // If only handler has been given as argument in the place of the delegation
  // selector, correct the variables
  if(typeof delegation === 'function') {
    handler = delegation;
    delegation = undefined;
  }

  const evts = getEvents(elm);

  iterate(eventNames || Object.keys(evts), (evtName) => {
    // go through event and namespaces
    eachEventNamespace(evtName, (evt) => {
      const evtObj = evts[evt];

      // if we are removing all event listeners from the object
      if(!eventNames) {
        evtObj.delegates = null;
        evtObj.handlers = [];

      // If we are removing a delegation
      } else if(delegation) {
        let delegates = evtObj.delegates[delegation];

        if(!delegates) {
          // If the handler is not defined, just remove all bound handlers,
          // otherwise filter out (remove) the handler from the list
          delegates = !handler ? [] : delegates.filter((boundHandler) => handler !== boundHandler);

          // We have to actually delete (not just set to null) the delegation
          // entry once it is empty, as we dont want it to show up as a key on
          // the object (using Object.keys)
          if(!delegates.length) {
            delete evtObj.delegates[delegation];
          } else {
            evtObj.delegates[delegation] = delegates;
          }

          // Clear the delegates object if it has no entries
          if(!Object.keys(evtObj.delegates).length) {
            evtObj.delegates = null;
          }
        }

      // If we are removing a specific event
      } else {
        // If the handler is not defined, just remove all bound handlers,
        // otherwise filter out (remove) the handler from the list
        evtObj.handlers = !handler ? [] : evtObj.handlers.filter((boundHandler) => handler !== boundHandler);
      }

      // If there are no more handlers bound to the current event, remove the
      // event handler and empty the event entry
      if(!evtObj.handlers.length && !evtObj.delegates) {
        elm.removeEventListener(evt, callback, true);
        evts[evt] = null;
      }
    });
  });
}




/**
 * Bind a single fire event handler for one or more event names (seperated by space).
 * Each event bound to will only trigger the handler once.
 * @param  {HTMLElement} elm - HTML Element to unbind the event from
 * @param  {String} eventNames - Space seperated string of event names to bind the handler to
 * @param  {Function} handler - Handler to bind to the event(s)
 * @return {Function} - Bound handler
 */
export function one(elm, eventNames, handler) {
  return on(elm, eventNames, function _one(e) {
    off(elm, e.type, _one);
    return handler.call(this, e);
  });
}




// Internal method to create the correct CustomEvent object
// (IE 11- doesn't implement the object correctly)
function customEvent(name, data) {
  if(typeof CustomEvent === 'function') { return new CustomEvent('evt', { detail: data }); }
  return document.createEvent('CustomEvent').initCustomEvent(name, true, true, data);
}

/**
 * Trigger event handlers for one or more event names (seperated by space)
 * @param  {HTMLElement} elm - HTML Element to trigger the event from
 * @param  {String} eventNames - Space seperated string of event names to trigger
 * @param  {Object} data - Extra data to add to the triggered event
 * @return {Number} - The number of event mentioned
 */
export function trigger(elm, eventNames, data) {
  return words(eventNames, (name) => elm.dispatchEvent(customEvent(name, data)));
}




/**
 * Execute a given function once the document has finished loading
 * @param  {Function} cb - Function to execute once the document has finished loading
 */
export default function domReady(cb) {
  if(typeof cb !== 'function') { return; }
  if(document.readyState === 'complete') { return cb(); }
  on(document, 'DOMContentLoaded', cb());
}
