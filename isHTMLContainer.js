export default function isHTMLContainer(elm) {
  return elm && (elm.nodeType === 1 || elm.nodeType === 11);
}
