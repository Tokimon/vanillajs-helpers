/**
 * Toggles (add/remove) one or several class names on a HTML Element
 * @param {HTMLElement} elm - HTML ELement in question
 * @param {Array<string>} ...classNames - Class names to toggle (arguments)
 */
export default function toggleClass(elm, classNames) {
  return classNames.forEach(cn => elm.classList.toggle(cn));
}
