import words from './eachWord';

export default function on(elm, eventNames, handler) {
  return words(eventNames, (name) =>
    elm.addEventListener(name, handler, true)
  );
}
