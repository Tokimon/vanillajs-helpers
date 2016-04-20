import { isString } from './objectType';

/**
 * Inserts HTML Element or plain HTML after a given HTML Element
 * @param  {HTMLElement} elm - The HTML Element to insert after
 * @param  {String|HTMLElement} insertElm - HTML Element or HTML to insert
 */
export default function after(elm, insertElm) {
  if(!elm.parentNode) { return; }
  if(insertElm.nodeType) { elm.parentNode.insertBefore(insertElm, elm.nextSibling); }
  else if(isString(insertElm)) { elm.insertAdjacentHTML('afterend', insertElm); }
}
