import children from './children';

/**
 * Get all sibling elements of a HTML element
 * @param  {HTMLElement} elm - The HTMLElement to find siblings of
 * @return {Array<HTMLElement>} - Collection of sibling elements
 */
export default function siblings(elm) {
  return children(elm.parentNode).filter((child) => child !== elm);
}




/**
 * Get the next sibling element of a HTML element
 * @param  {HTMLElement} elm - The HTMLElement to find the sibling of
 * @return {HTMLElement} - The next sibling element or null
 */
export function next(elm) {
  if(typeof elm.nextElementSibling !== undefined) { return elm.nextElementSibling; }

  let sibling = elm.nextSibling;
  while(sibling && sibling.nodeType !== 1) { sibling = elm.nextSibling; }
  return sibling;
}




/**
 * Get the previous sibling element of a HTML element
 * @param  {HTMLElement} elm - The HTMLElement to find the sibling of
 * @return {[type]} - The previous sibling element or null
 */
export function prev(elm) {
  if(typeof elm.prevElementSibling !== undefined) { return elm.prevElementSibling; }

  let sibling = elm.prevSibling;
  while(sibling && sibling.nodeType !== 1) { sibling = elm.prevSibling; }
  return sibling;
}
