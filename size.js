import viewport from './viewport';

/**
 * Finds the size of a HTML Element or window.
 * @param  {HTMLElement|window} [elm = viewport] - The HTML element (or window) to find the size of
 * @return {Object} - Object describing the various sizes of an element
 */
export default function size(elm = viewport) {
  const hasOp = !!elm.offsetParent;
  const isWin = elm === window;

  // Grab the size for the element
  return {
    width: hasOp ? elm.offsetWidth : window[`${isWin ? 'outer' : 'inner'}Width`],
    height: hasOp ? elm.offsetHeight : window[`${isWin ? 'outer' : 'inner'}Height`],
    innerWidth: !isWin ? elm[`${hasOp ? 'client' : 'offset'}Width`] : window.innerWidth,
    innerHeight: !isWin ? elm[`${hasOp ? 'client' : 'offset'}Height`] : window.innerHeight,
    contentWidth: (hasOp ? elm : viewport).scrollWidth,
    contentHeight: (hasOp ? elm : viewport).scrollHeight
  };
}
