/**
 * Toggles (add/remove) one or multiple class names on a HTML Element
 * @param {HTMLElement} elm - HTML Element to toggle class names from
 * @param {...String} classNames - Class names to toggle
 */
export default function toggle(elm, ...classNames) {
  return classNames.forEach(cn => elm.classList.toggle(cn));
}
