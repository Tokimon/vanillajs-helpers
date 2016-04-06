import children from './children';
import { isString } from './objectType';

export default function htmlToDom(html) {
  if(!isString(html)) { return html; }
  const div = document.createElement('div');
  div.innerHTML = html;
  return children(div);
}
