import isString from './objectType';

/**
 * Append HTML Element or plain HTML to the end of a given HTML Element
 * @param  {HTMLElement} elm - The HTML Element to append to
 * @param  {String|HTMLElement} insertElm - HTML Element or String to append to the {elm}
 */
export default function append(elm, insertElm) {
  if(isString(insertElm)) { elm.insertAdjacentHTML('beforeend', insertElm); }
  else if(insertElm.nodeType) { elm.appendChild(insertElm); }
}
