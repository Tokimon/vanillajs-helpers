// TODO: Add support for setting styles

export default function css(node) {
  return window.getComputedStyle(node);
}
