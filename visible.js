/**
 * Test if a given HTML element is visibile (as in viewable) for the user.
 * - Important distinction from 'hidden' is that this test for collapsed and opaque
 * elements as well, as those wouldn't be visible for the user.
 * @param  {HTMLElement} elm - HTML element to test
 * @return {Boolean} - Is the element visible for the user
 */
export default function visible(elm) {
  // 'display: none' and collapsed elements
  if(!elm.offsetHeight || !elm.offsetWidth) { return false; }
  const style = getComputedStyle(elm);
  // 'visibility: hidden' and 'opacity: 0' elements
  return style.visibility !== 'hidden' && !!Number(style.opacity);
}
