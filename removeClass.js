/**
 * Remove one or multiple class names from a HTML Element
 * @param {HTMLElement} elm - HTML ELement to remove class names from
 * @param {...String} classNames - Class names to remove
 */
export default function removeCLass(elm, classNames) {
  if(!Array.isArray(classNames)) { classNames = [classNames]; }
  return classNames.forEach(cn => elm.classList.remove(cn));
}
