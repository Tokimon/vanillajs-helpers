/**
 * Remove a given HTML Element from the DOM
 * @param  {HTMLElement} elm - The HTML Element to remove
 */
export default function removeElm(elm) {
  if(!elm.parentNode) { return; }
  elm.parentNode.removeChild(elm);
}
