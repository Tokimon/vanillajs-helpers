/**
 * Does one of the listed class names exist in the elements list of class names
 * @param  {HTML Element} elm - HTML Element to test
 * @param  {...String} classNames - Class names to test
 * @return {Boolean} - Did one of the class name listed exist the elements list of class names
 */
export default function hasAny(elm, ...classNames) {
  return classNames.some((cn) => elm.classList.contains(cn));
}
