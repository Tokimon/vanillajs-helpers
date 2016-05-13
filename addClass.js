import isHTMLElement from './isHTMLElement';
import isString from './isString';

/**
 * Adds one or multiple class names to a HTML Element
 * @param {HTMLElement} elm - HTML ELement to add class names to
 * @param {String|Array<String>} classNames - Class names to add
 */
export default function addClass(elm, classNames) {
  if(isString(classNames)) { classNames = classNames.split(/\s+/); }
  if(!isHTMLElement(elm) || !Array.isArray(classNames)) { return false; }
  classNames.forEach(cn => elm.classList.add(cn));
}
