import find from './find';

/**
 * Shortcut function to find(selector, elm, true). Returns the first found element.
 * @param  {String} selector - CSS query selector
 * @param  {HTMLElement} [elm=document] - The HTML Element from where to start the search
 * @return {HTMLElement|NULL} - The found element or null
 */
export default function findOne(selector, elm = document) {
  return find(selector, elm, true);
}
