import viewportScroll from './viewportScroll';

export default function metrix(node) {
  const rect = node.getBoundingClientRect();
  const vpScroll = viewportScroll();

  return {
    vpTop: rect.top,
    vpLeft: rect.left,
    vpRight: rect.right,
    vpBottom: rect.bottom,

    top: rect.top + vpScroll.top,
    left: rect.left + vpScroll.left,

    // TODO: Verify right/bottom mesurements
    right: rect.right + (vpScroll.width - vpScroll.left),
    bottom: rect.bottom + (vpScroll.height - vpScroll.top),

    height: rect.height,
    width: rect.width,

    innerHeight: node.clientHeight,
    innerWidth: node.clientWidth
  };
}
