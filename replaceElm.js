import isString from './isString';
import isDOMChildNode from './isDOMChildNode';

/**
 * Replace a given HTML Element with another HTML Element or plain HTML string
 * @param  {HTMLElement} elm - HTML Element to replace
 * @param  {HTMLElement|String} replacement - HTML Element or plain HTML string to replace {elm}
 */
export default function replaceElm(elm, replacement) {
  if(!isDOMChildNode(elm) || !replacement) { return; }
  if(isString(replacement)) { elm.outerHTML = replacement; }
  else if(replacement.nodeType) { elm.parentNode.replaceChild(elm, replacement); }
}
