// Expose the determined viewport element
export const viewport = document.scrollingElement || (document.compatMode === 'BackCompat' ? document.body : document.documentElement);




/**
 * Finds the size of a HTML Element or window.
 * @param  {HTMLElement|window} [elm = viewport] - The HTML element (or window) to find the size of
 * @return {Object} - Object describing the various sizes of an element
 */
export function size(elm = viewport) {
  // Grab the size for nomal HTML Elements
  const _size = {
    width: elm.offsetWidth,
    height: elm.offsetHeight,
    innerWidth: elm.clientWidth,
    innerHeight: elm.clientHeight,
    contentWidth: elm.scrollWidth,
    contentHeight: elm.scrollHeight
  };

  // return the size if it is an element dans le DOM
  if(elm.offsetParent) { return _size; }

  // If the element is the window, find the window dimensions
  if(elm === window) {
    _size.width = window.outerWidth;
    _size.height = window.outerHeight;
    _size.innerWidth = window.innerWidth;
    _size.innerHeight = window.innerHeight;
    _size.contentWidth = viewport.scrollWidth;
    _size.contentHeight = viewport.scrollHeight;

  // otherwise assume that the element is the viewport and return the size of that
  } else {
    _size.width = window.innerWidth;
    _size.height = window.innerHeight;
    _size.innerWidth = elm.offsetWidth;
    _size.innerHeight = elm.offsetHeight;
  }

  return _size;
}




/**
 * Find the current scroll position of a HTML Element
 * @param  {HTMLElement|window} [elm = viewport] - The HTML element to find the scrolling position from
 * @return {Object} - The current scroll information
 */
export function scroll(elm = viewport) {
  // Take the viewport if window is the element
  if(elm === window) { elm = viewport; }

  const elmSize = size(elm);

  return {
    top: elm.scrollTop,
    topMax: elm.scrollHeight - elmSize.height,
    left: elm.scrollLeft,
    leftMax: elm.scrollWidth - elmSize.width
  };
}




/**
 * Get the curernt position of a HTML element, either relative to the offsetParent
 * or relative to the document. If the element is the viewport or the window, the
 * position of the window is returned.
 * @param  {HTMLElement|window} [elm = viewport] - The HTML element to find the position of
 * @param  {Boolean} relative = false - Find the position relative to the offsetParent rather than the document
 * @return {Object} - the position information of the element
 */
export function position(elm = viewport, relative = false) {
  // If element is winodw or the viewport, return the window position
  if(!elm.offsetParent) {
    const top = window.screenLeft || window.screenX || 0;
    const left = window.screenY || window.screenTop || 0;
    const right = window.screen.availWidth - left - window.outerWidth;
    const bottom = window.screen.availHeight - top - window.outerHeight;

    return { top, left, right, bottom };
  }

  // Return the position elative to the offset parent
  if(relative) {
    const parentSize = size(elm.offsetParent);
    const elmSize = size(elm);

    return {
      top: elm.offsetTop,
      left: elm.offsetLeft,
      right: parentSize.innerWidth - elm.offsetLeft - elmSize.width,
      bottom: parentSize.innerHeight - elm.offsetRight - elmSize.height
    };
  }

  // Return the position relative to the document
  const rect = elm.getBoundingClientRect();
  const vpScroll = scroll();
  const vpSize = size();

  return {
    top: rect.top + vpScroll.top,
    left: rect.left + vpScroll.left,
    right: vpSize.width - rect.right - vpScroll.left,
    bottom: vpSize.height - rect.bottom - vpScroll.top
  };
}




/**
 * Find the size, position (relative/absolute) and scrolling information of a HTML element.
 * @param  {HTMLElement|window} [elm = viewport] - the HTML Element in question
 * @return {Object} - Object with the size, position and scrolling information
 */
export default function geometry(elm = viewport) {
  return Object.assign(
    {
      scroll: scroll(elm),
      absolute: position(elm),
      relative: position(elm, true)
    },
    size(elm)
  );
}
