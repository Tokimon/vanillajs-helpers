/**
 * Adds one or multiple class names to a HTML Element
 * @param {HTMLElement} elm - HTML ELement to add class names to
 * @param {...String} classNames - Class names to add
 */
export function add(elm, ...classNames) {
  return elm.classList.add(...classNames);
}




/**
 * Remove one or multiple class names from a HTML Element
 * @param {HTMLElement} elm - HTML ELement to remove class names from
 * @param {...String} classNames - Class names to remove
 */
export function remove(elm, ...classNames) {
  return elm.classList.remove(...classNames);
}




/**
 * Toggles (add/remove) one or multiple class names on a HTML Element
 * @param {HTMLElement} elm - HTML Element to toggle class names from
 * @param {...String} classNames - Class names to toggle
 */
export default function toggle(elm, ...classNames) {
  return classNames.forEach(cn => elm.classList.toggle(cn));
}




/**
 * Does all listed class names exist in the elements list of class names
 * @param  {HTML Element} elm - HTML Element to test
 * @param  {...String} classNames - Class names to test
 * @return {Boolean} - All class name listed were found in the elements list of class names
 */
export function has(elm, ...classNames) {
  return classNames.every((cn) => elm.classList.contains(cn));
}




/**
 * Does one of the listed class names exist in the elements list of class names
 * @param  {HTML Element} elm - HTML Element to test
 * @param  {...String} classNames - Class names to test
 * @return {Boolean} - Did one of the class name listed exist the elements list of class names
 */
export function hasAny(elm, ...classNames) {
  return classNames.some((cn) => elm.classList.contains(cn));
}




// export  all the different methods as a collection
export default {
  add,
  remove,
  toggle,
  has,
  hasAny
};
