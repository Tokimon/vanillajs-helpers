export default function isHTMLElement(elm, ...tags) {
  const isElm = !!elm && elm.nodeType === 1;
  if(!tags.length || !isElm) { return isElm; }
  return (tags.some ? tags : [tags]).some((tag) => elm.tagName.toLowerCase() === tag.toLowerCase());
}
