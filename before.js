import { isString } from './objectType';

/**
 * Inserts HTML Element or plain HTML before a given HTML Element
 * @param  {HTMLElement} elm - The HTML Element to insert {insertElm} before
 * @param  {String|HTMLElement} insertElm - HTML Element or String to insert before the {elm}
 */
export default function before(elm, insertElm) {
  const parent = elm.parentNode;

  if(!parent) {
    return console.error('You can only insert content before elements that are inside the DOM tree');
  }

  if(insertElm.nodeType) { parent.insertBefore(insertElm, elm); }
  else if(isString(insertElm)) { elm.insertAdjacentHTML('beforebegin', insertElm); }
}
