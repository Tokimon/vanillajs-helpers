/**
 * Find the children of a given HTML Element
 * @param  {HTMLElement} elm - HTML Element to find children from
 * @return {Array<HTMLElement>} - List of found child HTML Elements
 */
export default function children(elm = document.body) {
  if(elm.children) { return [...elm.children]; }
  return [...elm.childNodes].filter((child) => child.nodeType === 1);
}
