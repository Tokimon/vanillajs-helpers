import isDOMElement from './isDOMElement';
import isDOMRoot from './isDOMRoot';

export default function isDOMChild(elm) {
  return isDOMElement(elm) && !isDOMRoot(elm);
}
