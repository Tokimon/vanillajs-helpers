import isChildElement from './isChildElement';

/**
 * Remove a given HTML Element from the DOM
 * @param  {HTMLElement} elm - The HTML Element to remove
 */
export default function removeElm(elm) {
  if(isChildElement(elm)) { elm.parentNode.removeChild(elm); }
}
