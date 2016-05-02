import isHTMLElement from './isHTMLElement';

export default function isDOMElement(elm) {
  return isHTMLElement(elm) && elm.parentNode;
}
