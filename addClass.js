/**
 * Adds one or multiple class names to a HTML Element
 * @param {HTMLElement} elm - HTML ELement to add class names to
 * @param {...String} classNames - Class names to add
 */
export default function addClass(elm, classNames) {
  if(!Array.isArray(classNames)) { classNames = [classNames]; }
  return classNames.forEach(cn => elm.classList.add(cn));
}
