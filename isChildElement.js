import isHTMLElement from './isHTMLElement';

export default function isChildElement(elm) {
  return isHTMLElement(elm) && isHTMLElement(elm.parentNode);
}
