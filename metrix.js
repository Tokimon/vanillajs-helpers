import viewportScroll from './viewportScroll';

// TODO: Include scroll information
// TODO: Split up into size and scroll scripts

/**
 * Find a HTML Elements position relative to the viewport and the document along
 * with its dimentions (with and with out the border)
 * @param  {HTML Element} elm - the HTML Element in question
 * @return {Object} - Object with position and size information
 */
export default function metrix(elm) {
  const rect = elm.getBoundingClientRect();
  const vpScroll = viewportScroll();

  return {
    vpTop: rect.top,
    vpLeft: rect.left,
    vpRight: rect.right,
    vpBottom: rect.bottom,

    top: rect.top + vpScroll.top,
    left: rect.left + vpScroll.left,
    right: rect.right + vpScroll.left,
    bottom: rect.bottom + vpScroll.top,

    height: rect.height,
    width: rect.width,
    innerHeight: elm.clientHeight,
    innerWidth: elm.clientWidth
  };
}
