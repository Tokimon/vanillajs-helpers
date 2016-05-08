import isHTMLElement from './isHTMLElement';

/**
 * Find the children of a given HTML Element
 * @param  {HTMLElement} elm - HTML Element to find children from
 * @return {Array<HTMLElement>} - List of found child HTML Elements
 */
export default function children(elm = document.body) {
  if(!isHTMLElement(elm)) { return []; }
  if(elm.children) { return Array.from(elm.children); }
  return Array.from(elm.childNodes).filter((child) => child.nodeType === 1);
}
