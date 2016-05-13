import isString from './isString';
import isHTMLNode from './isHTMLNode';
import isChildElement from './isChildElement';

/**
 * Inserts HTML Element or plain HTML before a given HTML Element
 * @param  {HTMLElement} elm - The HTML Element to insert {insertElm} before
 * @param  {String|HTMLElement} insertElm - HTML Element or String to insert before the {elm}
 */
export default function before(elm, insertElm) {
  if(!isChildElement(elm)) { return; }
  if(isHTMLNode(insertElm)) { elm.parentNode.insertBefore(insertElm, elm); }
  else if(isString(insertElm)) { elm.insertAdjacentHTML('beforebegin', insertElm); }
}
