import { isString } from './objectType';

/**
 * Replace a given HTML Element with another HTML Element or plain HTML string
 * @param  {HTMLElement} elm - HTML Element to replace
 * @param  {HTMLElement|String} replacement - HTML Element or plain HTML string to replace {elm}
 */
export default function replaceElm(elm, replacement) {
  if(!elm.parentNode || !replacement) { return; }
  if(isString(replacement)) { elm.outerHTML = replacement; }
  else if(replacement.nodeType === 3) { elm.parentNode.replaceChild(elm, replacement); }
}
