import isDOMNode from './isDOMNode';

export default function isDOMChildNode(elm) {
  return isDOMNode(elm) && !!elm.parentElement;
}
