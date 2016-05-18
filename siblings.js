import isDOMChildNode from './isDOMChildNode';
import children from './children';

/**
 * Get all sibling elements of a given HTML element
 * @param  {HTMLElement} elm - HTML element to find siblings of
 * @return {Array<HTMLElement>} - Collection of sibling elements
 */
export default function siblings(elm) {
  if(!isDOMChildNode(elm)) { return null; }
  return children(elm.parentNode).filter((child) => child !== elm);
}



function siblingElement(dir) {
  let sibling = elm[`${dir}Sibling`];
  while(sibling && sibling.nodeType !== 1) { sibling = elm[`${dir}Sibling`]; }
  return sibling.nodeType !== 1 ? null : sibling;
}


/**
 * Get the next sibling element of a HTML element
 * @param  {HTMLElement} elm - The HTMLElement to find the sibling of
 * @return {HTMLElement|null} - The next sibling element or null
 */
export function next(elm) {
  if(!isDOMChildNode(elm)) { return null; }
  if(typeof elm.nextElementSibling !== undefined) { return elm.nextElementSibling; }
  return siblingElement('next');
}




/**
 * Get the previous sibling element of a HTML element
 * @param  {HTMLElement} elm - The HTMLElement to find the sibling of
 * @return {[type]} - The previous sibling element or null
 */
export function prev(elm) {
  if(!isDOMChildNode(elm)) { return null; }
  if(typeof elm.prevElementSibling !== undefined) { return elm.prevElementSibling; }
  return siblingElement('prev');
}
