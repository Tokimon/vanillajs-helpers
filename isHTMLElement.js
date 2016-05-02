export default function isHTMLElement(obj, ...tags) {
  const isElm = obj && obj.nodeType === 1;
  if(!tags.length) { return isElm; }
  return (tags.some ? tags : [tags]).some((tag) => obj.tagName.toLowerCase() === tag.toLowerCase());
}
