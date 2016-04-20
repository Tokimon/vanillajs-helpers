/**
 * Test if a given HTML element is technically hidden ('display:none' or 'visibility: hidden').
 * @param  {HTMLElement} elm - HTML element to test
 * @return {Boolean} - Is the element technically hidden or not
 */
export default function hidden(elm) {
  if(!elm.offsetHeight && !elm.offsetWidth) { return true; }
  return getComputedStyle(elm).visibility === 'hidden';
}