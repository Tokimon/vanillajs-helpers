import isString from './isString';
import isHTMLNode from './isHTMLNode';
import isDOMChild from './isDOMChild';

/**
 * Inserts HTML Element or plain HTML after a given HTML Element
 * @param  {HTMLElement} elm - The HTML Element to insert after
 * @param  {String|HTMLElement} insertElm - HTML Element or HTML to insert
 */
export default function after(elm, insertElm) {
  if(!isDOMChild(elm)) { return; }
  if(isHTMLNode(insertElm)) { elm.parentNode.insertBefore(insertElm, elm.nextSibling); }
  else if(isString(insertElm)) { elm.insertAdjacentHTML('afterend', insertElm); }
}
