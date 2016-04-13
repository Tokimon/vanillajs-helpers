/**
 * Remove one or several class names from a HTML Element
 * @param {HTMLElement} elm - HTML ELement in question
 * @param {Array<string>} ...classNames - Class names to remove (arguments)
 */
export default function removeClass(elm, ...classNames) {
  return elm.classList.remove(...classNames);
}
