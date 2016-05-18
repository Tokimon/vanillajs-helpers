import isString from './isString';
import isArray from './isArray';

export default function findById(ids) {
  // Is it is a string split by comma and/or space (convert to Array)
  if(isString(ids)) { ids = ids.split(/[\s,]+/); }

  // 'ids' has to be an Array
  if(!isArray(ids)) { return null; }

  // Search elements from each ID and filter out results that returned NULL
  const nodes = ids.map((id) => isString(id) ? document.getElementById(id) : null).filter((elm) => !!elm);

  // Return Array if ids had more than one entry otherwise just the first result
  return ids.length > 1 ? nodes : nodes[0] || null;
}
