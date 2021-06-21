/**
 * Removes and returns an entry from a given array, at a designated index position.
 * NOTE: This is not a pure function and will alter the given array internally
 *
 * @example
 * ```ts
 * popIndex([1,2,3], 1); // -> 2 (array will then be [1, 3])
 * ```
 *
 * @param list - The Array to remove the item from
 * @param index - At what index to remove from
 */
function popIndex(list: unknown[], index: number): unknown {
  if (index >= 0 && index < list.length) {
    return list.splice(index, 1)[0];
  }
}

export default popIndex;
