import isString from './isString';
import isHTMLNode from './isHTMLNode';
import isHTMLContainer from './isHTMLContainer';

/**
 * Append HTML Element or plain HTML to the end of a given HTML Element
 * @param  {HTMLElement} elm - The HTML Element to append to
 * @param  {String|HTMLElement} insertElm - HTML Element or String to append to the {elm}
 */
export default function append(elm, insertElm) {
  if(!isHTMLContainer(elm)) { return; }
  if(isHTMLNode(insertElm)) { elm.appendChild(insertElm); }
  else if(isString(insertElm)) { elm.insertAdjacentHTML('beforeend', insertElm); }
}
