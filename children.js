/**
 * Find the children of a given HTML Element
 * @param  {HTMLElement} elm - HTML Element to find children from
 * @return {Array<HTMLElement>} - List of found child HTML Elements
 */
export function children(elm) {
  if(!elm) { return []; }
  if(elm.children) { return [...elm.children]; }
  return [...elm.childNodes].filter((child) => child.nodeType === 1);
}
