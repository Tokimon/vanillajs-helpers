import isString from './isString';
import isDOMElement from './isDOMElement';

/**
 * Prepend HTML Element or plain HTML into a given HTML Element
 * @param  {HTMLElement} elm - The HTML Element to prepend into
 * @param  {string|HTMLElement} insertElm - HTML Element or String to prepend to the {elm}
 */
export default function prepend(elm, insertElm) {
  if(!isDOMElement(elm)) { return; }
  if(isString(insertElm)) { elm.insertAdjacentHTML('afterbegin', insertElm); }
  else if(insertElm.nodeType) { elm.insertBefore(elm.firstChild, insertElm); }
}
