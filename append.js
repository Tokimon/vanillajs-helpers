import isString from '../../util/objectType';

export default function prepend(context, node) {
  if(isString(node)) { context.insertAdjacentHTML('beforeend', node); }
  else if(node.nodeType) { context.appendChild(node); }
}
