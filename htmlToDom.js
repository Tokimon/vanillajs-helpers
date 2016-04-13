import children from './children';
import { isString } from './objectType';

/**
 * Convert HTML into DOM node(s)
 * @param  {String} html - HTML string to transform into nodes
 * @return {Array<HTMLElement>} - List of converted HTML Elements
 */
export default function htmlToDom(html) {
  if(!isString(html)) { return html; }
  const div = document.createElement('div');
  div.innerHTML = html;
  return children(div);
}
