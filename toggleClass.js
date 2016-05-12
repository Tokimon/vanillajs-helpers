import isHTMLElement from './isHTMLElement';
import isBoolean from './isBoolean';

/**
 * Toggles (add/remove) one or multiple class names on a HTML Element
 * @param {HTMLElement} elm - HTML Element to toggle class names from
 * @param {...String} classNames - Class names to toggle
 */
export default function toggle(elm, classNames, force) {
  if(!isHTMLElement(elm)) { return; }
  if(!Array.isArray(classNames)) { classNames = [classNames]; }
  classNames.forEach(cn => elm.classList.toggle(cn, force));
}
