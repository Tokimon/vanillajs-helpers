/**
 * Adds one or multiple class names to a HTML Element
 * @param {HTMLElement} elm - HTML ELement to add class names to
 * @param {...String} classNames - Class names to add
 */
export default function addClass(elm, ...classNames) {
  return elm.classList.add(...classNames);
}
