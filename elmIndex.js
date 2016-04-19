import children from './children';

/**
 * Find the index of a HTML element amongst its siblings
 * @param  {HTMLElement} elm - HTML element to find the index of
 * @return {Number} - The index of {elm}
 */
export default function elmIndex(elm) {
  const parent = elm.parentNode;
  return parent ? children(parent).indexOf(elm) : 0;
}
