// TODO: Make generic for all HTML Elements, not just viewport

/**
 * Get the width and height of the viewport area
 * @return {Object} - Viewport size
 * @return {Object.width} - Viewport width
 * @return {Object.height} - Viewport height
 */
export default function viewportSize() {
  return {
    width: Math.max(document.documentElement.clientWidth, window.innerWidth),
    height: Math.max(document.documentElement.clientHeight, window.innerHeight)
  };
}
