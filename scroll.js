import viewport from './viewport';
import size from './size';
import isObject from './isObject';
import isWindow from './isWindow';
import isDOMElement from './isDOMElement';
import inDOM from './inDOM';

/**
 * Find the current scroll position of a HTML Element
 * @param  {HTMLElement|window} [elm = viewport] - The HTML element to find the scrolling position from
 * @return {Object} - The current scroll information
 */
export default function scroll(elm = window, scrollPos = null) {
  let isWin = isWindow(elm);

  if(!isWin) {
    if(isObject(elm)) { [elm, scrollPos] = [window, elm]; }

    if(isDOMElement(elm, 'html', 'body')) { elm = elm.ownerDocument; }
    if(typeof elm.defaultView !== 'undfined') { elm = elm.defaultView; }

    isWin = isWindow(elm);

    if(!(isDOMElement(elm) && inDOM(elm)) || isWin) { return null; }
  }

  const view = isWin ? viewport(elm) : elm;

  if(scrollPos) {
    const { byX, byY, x, y } = scrollPos;

    if(!isNaN(x)) { view.scrollTop = x; }
    else if(!isNaN(byX)) { view.scrollTop += byX; }

    if(!isNaN(y)) { view.scrollTop = y; }
    else if(!isNaN(byY)) { view.scrollTop += byY; }
  }

  const s = size(elm);

  return {
    x: view.scrollLeft,
    xMax: s.contentWidth - s.innerWidth,
    y: view.scrollTop,
    yMax: s.contentHeight - s.innerHeight
  };
}
