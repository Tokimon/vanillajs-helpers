import isHTMLElement from './isHTMLElement';

export default function isDOMChild(elm) {
  return elm && isHTMLElement(elm.parentNode);
}
