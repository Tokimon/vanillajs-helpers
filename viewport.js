import isDOMDocument from 'isDOMDocument';

export default function viewport(doc = document) {
  if(!isDOMDocument(doc)) {
    doc = doc.ownerDocument || elm.document;
    if(!doc) { return null; }
  }

  return doc.scrollingElement || (doc.compatMode === 'BackCompat' ? doc.body : doc.documentElement)
}
