import isChildElement from './isChildElement';
import children from './children';

/**
 * Find the index of a HTML element amongst its siblings
 * @param  {HTMLElement} elm - HTML element to find the index of
 * @return {Number} - The index of {elm}
 */
export default function elmIndex(elm) {
  return isChildElement(elm) ? children(elm.parentNode).indexOf(elm) : -1;
}
