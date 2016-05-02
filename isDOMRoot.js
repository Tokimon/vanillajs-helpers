import isHTMLElement from './isHTMLElement';

export default function isDOMRoot(obj) {
  return isHTMLElement(obj, 'html', 'body', 'head');
}
