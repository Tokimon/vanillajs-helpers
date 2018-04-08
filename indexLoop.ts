import isFunction from './isFunction';



export type IndexLoopCallback = (item: any, index: number, arr: ArrayLike<any>) => void | boolean;



/**
 * Iterate over numeric indexes in an object
 * (use `return false` to break the loop prematurely).
 *
 * ```ts
 * const len = indexLoop([1,2,3], (n) => { console.log(n); }); // -> 1 ... 2 ... 3
 * // len === 3
 *
 * // With premature break
 * indexLoop([1,2,3], (n) => { console.log(n); return n < 3 }); // -> 1 ... 2
 * ```
 *
 * @param collection - The collection to iterate over
 * @param cb - The function to call on each iteration
 * @return - The lenght of the given collection
 */
export default function indexLoop(collection: any[] | ArrayLike<any>, cb: IndexLoopCallback): number {
  collection = collection || [];
  const len = collection.length;

  if (isFunction(cb)) {
    let i = -1;
    while (++i < len) {
      if (cb(collection[i], i, collection) === false) { break; }
    }
  }

  return len;
}
