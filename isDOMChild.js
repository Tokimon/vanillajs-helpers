import isDOMElement from './isDOMElement';
import isDOMRoot from './isDOMRoot';

export default function isDOMChild() {
  return isDOMElement(elm) || !isDOMRoot(elm)
}
