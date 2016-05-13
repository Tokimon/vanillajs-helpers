import isHTMLElement from './isHTMLElement';
import isString from './isString';

/**
 * Remove one or multiple class names from a HTML Element
 * @param {HTMLElement} elm - HTML ELement to remove class names from
 * @param {String|Array<String>} classNames - Class names to remove
 */
export default function removeCLass(elm, classNames) {
  if(isString(classNames)) { classNames = classNames.split(/\s+/); }
  if(!isHTMLElement(elm) || !Array.isArray(classNames)) { return false; }
  classNames.forEach(cn => elm.classList.remove(cn));
}
