export default function removeNode(context) {
  const parent = context.parentNode;
  if(!parent) { return console.warn('You can only replace nodes that are part of the DOM tree'); }
  parent.removeChild(context);
}
