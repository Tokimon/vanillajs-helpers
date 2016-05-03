import isString from './isString';
import isDOMChild from './isDOMChild';

/**
 * Inserts HTML Element or plain HTML before a given HTML Element
 * @param  {HTMLElement} elm - The HTML Element to insert {insertElm} before
 * @param  {String|HTMLElement} insertElm - HTML Element or String to insert before the {elm}
 */
export default function before(elm, insertElm) {
  // 'elm' has to be a HTML element that exsists in the DOM and is not a DOM root element
  if(!isDOMChild(elm) || !insertElm) { return; }

  // Insert HTML element
  if(insertElm.nodeType) { elm.parentNode.insertBefore(insertElm, elm); }
  // Insert HTML
  else if(isString(insertElm)) { elm.insertAdjacentHTML('beforebegin', insertElm); }
}
