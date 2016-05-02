/**
 * Bind a single fire event handler for one or more event names (seperated by space).
 * Each event bound to will only trigger the handler once.
 * @param  {HTMLElement} elm - HTML Element to unbind the event from
 * @param  {String} eventNames - Space seperated string of event names to bind the handler to
 * @param  {Function} handler - Handler to bind to the event(s)
 * @return {Function} - Bound handler
 */
export function once(on, off) {
  return (elm, eventNames, handler) => {
    return on(elm, eventNames, function _one(e) {
      off(elm, e.type, _one);
      return handler.call(this, e);
    });
  };
}
