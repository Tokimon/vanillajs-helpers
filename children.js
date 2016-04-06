export function children(elm) {
  if(!elm) { return []; }
  if(elm.children) { return [...elm.children]; }
  return [...elm.childNodes].filter((child) => child.nodeType === 1);
}
