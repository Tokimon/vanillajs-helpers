import { isString } from './objectType';

/**
 * Inserts HTML Element or plain HTML after a given HTML Element
 * @param  {HTMLElement} elm - The HTML Element in question
 * @param  {String|HTMLElement} insertElm - HTML Element or String to insert after the {elm}
 */
export default function after(elm, insertElm) {
  const parent = elm.parentNode;

  if(!parent) {
    return console.error('You can only insert content after elements that are inside the DOM tree');
  }

  if(insertElm.nodeType) { parent.insertBefore(insertElm, elm.nextSibling); }
  else if(isString(insertElm)) { elm.insertAdjacentHTML('afterend', insertElm); }
}
