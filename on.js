import words from './eachWord';

// TODO: Add support for delagte event (selector)

export default function on(elm, eventNames, handler) {
  return words(eventNames, (name) => elm.addEventListener(name, handler, true));
}
