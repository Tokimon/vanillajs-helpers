import isString from './isString';

/**
 * Convert HTML into DOM node(s)
 * @param  {String} html - HTML string to transform into nodes
 * @return {Array<HTMLElement>} - HTML Elements that the HTML represented
 */
export default function htmlToDom(html) {
  if(!isString(html)) { return html; }
  return (new DOMParser()).parseFromString(html, 'text/html');
}
