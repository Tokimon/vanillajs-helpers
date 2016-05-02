import words from './eachWord';

/**
 * Bind event handler for one or more event names (seperated by space).
 * @param  {HTMLElement} elm - HTML Element to bind the event to
 * @param  {String} eventNames - Space seperated string of event names to bind the handler to
 * @param  {Function} handler - Handler to bind to the event(s)
 * @return {Function} - Bound handler
 */
export default function on(elm, eventNames, handler) {
  words(eventNames, (name) => elm.addEventListener(name, handler, true));
  return handler;
}
