/**
 * Get current styling of a HTML element and optionally set given style first
 * @param  {HTMLElement} elm - HTML Element to get the style from
 * @param  {Object} style - [optional] Styling to set on the elment
 * @return {Object} - Current styling on the element
 */
export default function css(elm, style) {
  // If styles are defined, then add them to the elments inline style
  if(style) {
    // Go through each style
    Object.keys(style).forEach((key) => {
      // camelCase the key
      const camelKey = key.replace(/-[a-z]/gi, (m) => m[1].toUpperCase());
      // Set the style
      elm.style[camelKey] = style[key];
    });
  }

  // return current style
  return window.getComputedStyle(elm);
}
