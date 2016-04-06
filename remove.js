export default function remove(context, replacement) {
  const parent = context.parentNode;

  if(!parent) {
    return console.warn('You can only replace nodes that are part of the DOM tree');
  }

  if(replacement && replacement.nodeType === 3) {
    parent.replaceChild(context, replacement);
  } else {
    parent.removeChild(context);
  }
}
