import { isString } from './objectType';

/**
 * Inserts HTML Element or plain HTML before a given HTML Element
 * @param  {HTMLElement} elm - The HTML Element to insert {insertElm} before
 * @param  {String|HTMLElement} insertElm - HTML Element or String to insert before the {elm}
 */
export default function before(elm, insertElm) {
  if(!elm.parentNode) { return; }
  if(insertElm.nodeType) { elm.parentNode.insertBefore(insertElm, elm); }
  else if(isString(insertElm)) { elm.insertAdjacentHTML('beforebegin', insertElm); }
}
