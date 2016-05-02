import isString from './isString';
import isDOMChild from './isDOMChild';

/**
 * Inserts HTML Element or plain HTML after a given HTML Element
 * @param  {HTMLElement} elm - The HTML Element to insert after
 * @param  {String|HTMLElement} insertElm - HTML Element or HTML to insert
 */
export default function after(elm, insertElm) {
  // 'elm' has to be a HTML element that exsists in the DOM and is not a DOM root element
  if(!isDOMChild(elm)) { return; }

  // Insert HTML element
  if(insertElm.nodeType) { elm.parentNode.insertBefore(insertElm, elm.nextSibling); }
  // Insert HTML
  else if(isString(insertElm)) { elm.insertAdjacentHTML('afterend', insertElm); }
}
