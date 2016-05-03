import isString from './isString';
import isHTMLNode from './isHTMLNode';
import isHTMLContainer from './isHTMLContainer';

/**
 * Prepend HTML Element or plain HTML into a given HTML Element
 * @param  {HTMLElement} elm - The HTML Element to prepend into
 * @param  {string|HTMLElement} insertElm - HTML Element or String to prepend to the {elm}
 */
export default function prepend(elm, insertElm) {
  if(!isHTMLContainer(elm)) { return; }
  if(isHTMLNode(insertElm)) { elm.insertBefore(insertElm, elm.firstChild); }
  else if(isString(insertElm)) { elm.insertAdjacentHTML('afterbegin', insertElm); }
}
