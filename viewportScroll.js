// TODO: Make generic for all HTML Elements, not just viewport
// TODO: Add max X/Y scroll positions

/**
 * Get the current viewport sroll information
 * @return {Object} - Viewport scroll information
 * @return {Object.top} - Viewport Y scroll position
 * @return {Object.left} - Viewport X scroll position
 * @return {Object.height} - Height of the viewport scrollable content
 * @return {Object.width} - Width of the viewport scrollable content
 */
export default function viewportScroll() {
  const body = document.body;
  const html = document.documentElement;

  return {
    top: window.pageYOffset  || Math.max(body.scrollTop, html.scrollTop),
    left: window.pageXOffset  || Math.max(body.scrollLeft, html.scrollLeft),
    width: Math.max(body.scrollWidth, html.scrollWidth),
    height: Math.max(body.scrollHeight, html.scrollHeight)
  };
}
