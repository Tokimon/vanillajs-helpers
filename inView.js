import isChildElement from './isChildElement';

/**
 * Determines whether the element is in the area of the viewport or not.
 * @param  {HTMLElement} elm - HTML element to test
 * @param  {Number} [threshold = 0] - The distance to the edge of the viwport before
 *                                    the element is no longer visible in the viewport area
 *
 * @return {Boolean|Object} - If the element is in the viewport area it returns true,
 *                            otherwise it returns an object with indications of
 *                            where the element is compared to the viewport area
 */
export default function inView(elm, threshold = 0) {
  if(!isChildElement(elm)) { return false; }

  const rect = elm.getBoundingClientRect();
  const vpWidth = window.innerWidth;
  const vpHeight = window.innerHeight;

  // Determine if the element is on screen
  const aboveView = rect.bottom - threshold < 0;
  const belowView = rect.top - vpHeight + threshold >= 0;
  const leftOfView = rect.right - threshold < 0;
  const rightOfView = rect.left - vpWidth + threshold >= 0;

  // If it is on screen return true
  if(!aboveView && !belowView && !leftOfView && !rightOfView) { return true; }

  // Otherwise return an object saying where the element is compared to the viewport
  return { aboveView, belowView, leftOfView, rightOfView };
}
