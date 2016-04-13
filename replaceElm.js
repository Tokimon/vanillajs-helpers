import { isString } from './objectType';

/**
 * Replace HTML Element with another HTML Element or plain HTML string
 * @param  {HTMLElement} elm - HTML Element in question
 * @param  {HTMLElement|String} replacement - HTML Element or plain HTML string to replace {elm}
 */
export default function replaceElm(elm, replacement) {
  const parent = elm.parentNode;
  if(!parent) { return console.warn('You can only replace nodes that are part of the DOM tree'); }
  if(!replacement) { return; }

  if(isString(replacement)) { elm.outerHTML = replacement; }
  else if(replacement.nodeType === 3) { parent.replaceChild(elm, replacement); }
}
