import words from './eachWord';

export default function off(elm, eventNames, handler) {
  return words(eventNames, (name) => elm.removeEventListener(name, handler, true));
}
