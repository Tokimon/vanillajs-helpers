import words from './eachWord';
import isFunction from './isFunction';

/**
 * Unbinds events for the given element.
 * @param  {HTMLElement} elm - HTML Element to unbind the event from
 * @param  {String} eventNames - Space seperated string of event names to unbind the handler from
 * @param  {Function} handler - Handler to unbind from the event(s)
 * @return {HTMLElement} - The 'elm' or NULL
 */
export default function off(elm, eventNames, handler) {
  if(!elm || !isFunction(elm.addEventListener) || !isFunction(handler)) { return null; }
  words(eventNames, (name) => elm.removeEventListener(name, handler, true));
  return elm;
}
