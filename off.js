import words from './eachWord';

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
