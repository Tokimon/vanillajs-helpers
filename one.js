import on from './on';
import off from './off';
import words from './eachWord';

// TODO: Add support for delagte event (selector)

function onetrigger(elm, eventName, handler) {
  return function _one(e) {
    off(elm, eventName, _one);
    return handler(e);
  };
}

export default function one(elm, eventNames, handler) {
  return words(eventNames, (name) => {
    on(elm, name, onetrigger(elm, name, handler), true);
  });
}
