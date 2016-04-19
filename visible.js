/**
 * Determines whether the element is visible or not.
 * @param  {HTMLElement} elm - HTML element to test
 * @param  {Number} [threshold = 0] - The distance to the edge of the screen before
 *                                    the element is no longer visible on the screen
 * @return {Boolean|Object} - If the element is hidden (display: none) it returns false,
 *                            if the element is on screen it returns true, otherwise it
 *                            returns an object with indications of where the elmement
 *                            is compared to the screen
 */
export default function visible(elm, threshold = 0) {
  const rect = elm.getBoundingClientRect();
  const vpWidth = window.innerWidth;
  const vpHeight = window.innerHeight;

  // return false if it is not visible at all
  if(!rect.height && !rect.width) { return false; }

  // Determine if the element is on screen
  const aboveView = rect.bottom - threshold < 0;
  const belowView = rect.top - vpHeight + threshold >= 0;
  const leftOfView = rect.right - threshold < 0;
  const rightOfView = rect.left - vpWidth + threshold >= 0;

  // If it is on screen return true
  if(!aboveView && !belowView && !leftOfView && !rightOfView) {
    return true;
  }

  // Otherwise return an object saying where the element is compared to the viewport
  return { aboveView, belowView, leftOfView, rightOfView };
}
