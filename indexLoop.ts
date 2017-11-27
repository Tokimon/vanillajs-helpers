import isFunction from './isFunction';
import isNumber from './isNumber';



export type ArrayLike = {
  [key: number]: any,
  length: number
}

export type IndexLoopCallback = (item: any, index: number, arr: any[]|ArrayLike) => void|boolean;



/**
 * Iterate over numeric indexes in an object
 * (use `return false` to break the loop prematurely).
 */
export default function indexLoop(collection: any[]|ArrayLike, cb: IndexLoopCallback) {
  collection = collection || [];
  const len = collection.length;

  if(isFunction(cb)) {
    let i = -1;
    while(++i < len) {
      if(cb(collection[i], i, collection) === false) { break; }
    }
  }

  return len;
}
