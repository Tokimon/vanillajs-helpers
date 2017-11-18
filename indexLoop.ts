import isFunction from './isFunction';
import isNumber from './isNumber';



export type ArrayLike = {
  [key: number]: any,
  length: number
}

/**
 * Iterate over numeric indexes in an object
 * (use `return false` to break the loop prematurely).
 */
export default function indexLoop(collection: any[]|ArrayLike, cb: Function) {
  if(!isFunction(cb) || !collection) { return 0; }

  const len = collection.length;

  // Make a single iteration if the 'collection' doesn't have a length
  if(!isNumber(len)) {
    cb(collection, 0, collection);
    return 1;
  }

  let i = -1;
  while(++i < len) {
    if(cb(collection[i], i, collection) === false) { break; }
  }

  return len;
}
