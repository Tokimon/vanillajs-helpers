import viewport from './viewport';

/**
 * Find the current scroll position of a HTML Element
 * @param  {HTMLElement|window} [elm = viewport] - The HTML element to find the scrolling position from
 * @return {Object} - The current scroll information
 */
export default function scroll(elm = viewport) {
  // Take the viewport if window is the element
  if(elm === window) { elm = viewport; }

  const width = elm.offsetParent ? elm.offsetWidth : window.innerWidth;
  const height = elm.offsetParent ? elm.offsetHeight : window.innerHeight;

  return {
    top: elm.scrollTop,
    maxTop: elm.scrollHeight - height,
    left: elm.scrollLeft,
    leftMax: elm.scrollWidth - width
  };
}
