import isDOMElement from './isDOMElement';
import isDOMDocument from './isDOMDocument';
import isString from './isString';
import isArray from './isArray';

export default function findByQuery(queries, elm = document, first = false) {
  // Correct variables if 'elm' is omitted but 'first' isn't
  if(isBoolean(elm)) { [elm, first] = [document, elm]; }

  // Is it is a string split by comma (convert to Array)
  if(isArray(queries)) { queries = queries.join(','); }

  // 'elm' has to be either a HTMLElement or 'document'
  // and queries has to be an Array
  if(!isString(queries)) { return first ? null : []; }

  // 'elm' must be an object with the 'querySelector' implementation
  if(!(elm && elm.querySelector)) { elm = document; }

  return first ? elm.querySelector(query) : Array.from(elm.querySelectorAll(query));
}
