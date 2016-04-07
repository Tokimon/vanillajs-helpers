export default function viewportScroll() {
  const body = document.body;
  const html = document.documentElement;

  return {
    top: window.pageYOffset  || Math.max(body.scrollTop, html.scrollTop),
    left: window.pageXOffset  || Math.max(body.scrollLeft, html.scrollLeft),
    width: Math.max(body.scrollWidth, html.scrollWidth),
    height: Math.max(body.scrollHeight, html.scrollHeight),
  };
}
