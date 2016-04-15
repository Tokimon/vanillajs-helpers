import { words } from './iterate';
import matches from './matchesSelector';




// Internal helper function to return a delegate function
function delegateCb(delegation, handler) {
  return (e) => {
    let target = e.target;

    // The target matches the delegation selector, so execute the handler
    if(matches(target, delegation)) { return handler.call(target, e); }

    // Taget is a child of the delegation selector target, so loop up the parents
    // to find the right target
    if(matches(target, `${delegation} *`)) {
      target = target.parentNode;
      while(!matches(target, delegation)) { target = target.parentNode; }
      handler.call(target, e);
    }
  };
}

/**
 * Bind event handler for one or more event names (seperated by space).
 * @param  {HTMLElement} elm - HTML Element to bind the event to
 * @param  {String} eventNames - Space seperated string of event names to bind the handler to
 * @param  {Function} handler - Handler to bind to the event(s)
 * @return {Function} - Bound handler (delegation handler if {delegation} is defined)
 */
export default function on(elm, eventNames, delegation, handler) {
  if(delegation) {
    const cb = delegateCb(delegation, handler);
    words(eventNames, (name) => elm.addEventListener(name, cb, true));
    return cb;
  }

  words(eventNames, (name) => elm.addEventListener(name, handler, true));
  return handler;
}




/**
 * Unbinds events for the given element.
 * @param  {HTMLElement} elm - HTML Element to unbind the event from
 * @param  {String} eventNames - Space seperated string of event names to unbind the handler from
 * @param  {Function} handler - Handler to unbind from the event(s)
 * @return {Number} - The number of event mentioned
 */
export function off(elm, eventNames, handler) {
  words(eventNames, (name) => elm.removeEventListener(name, handler, true));
  return handler;
}




/**
 * Bind a single fire event handler for one or more event names (seperated by space).
 * Each event bound to will only trigger the handler once.
 * @param  {HTMLElement} elm - HTML Element to unbind the event from
 * @param  {String} eventNames - Space seperated string of event names to bind the handler to
 * @param  {Function} handler - Handler to bind to the event(s)
 * @return {Function} - Bound handler
 */
export function one(elm, eventNames, delegation, handler) {
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
  one(document, 'DOMContentLoaded', () => cb());
}
