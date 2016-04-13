/**
 * Adds one or several class names to a HTML Element
 * @param {HTMLElement} elm - HTML ELement in question
 * @param {Array<string>} ...classNames - Class names to add (arguments)
 */
export default function addClass(elm, ...classNames) {
  return elm.classList.add(...classNames);
}
