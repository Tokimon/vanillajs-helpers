/**
 * Remove the HTML Element from the DOM
 * @param  {HTMLElement} elm - The HTML Element in question
 */
export default function removeElm(elm) {
  const parent = elm.parentNode;
  if(!parent) { return console.warn('You can only replace nodes that are part of the DOM tree'); }
  parent.removeChild(elm);
}
