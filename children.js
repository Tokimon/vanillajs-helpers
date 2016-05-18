import isDOMContainer from './isDOMContainer';

/**
 * Find the children of a given HTML Element
 * @param  {HTMLElement} [elm=document.body] - HTML Element to find children from
 * @return {Array<HTMLElement>} - List of found child HTML Elements
 */
export default function children(elm = document.body) {
  if(!isDOMContainer(elm)) { return []; }
  if(elm.children) { return Array.from(elm.children); }
  return Array.from(elm.childNodes).filter((child) => child.nodeType === 1);
}
