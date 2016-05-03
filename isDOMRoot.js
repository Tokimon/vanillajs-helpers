import isHTMLElement from './isHTMLElement';

export default function isDOMRoot(elm) {
  return isHTMLElement(elm, 'html');
}
