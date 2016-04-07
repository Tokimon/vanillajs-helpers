import { isString } from './objectType';

export default function replaceNode(node, replacement) {
  const parent = node.parentNode;
  if(!parent) { return console.warn('You can only replace nodes that are part of the DOM tree'); }

  if(isString(replacement)) { node.outerHTML = replacement; }
  else if(replacement && replacement.nodeType === 3) { parent.replaceChild(node, replacement); }
}
