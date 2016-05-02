/**
 * Does all listed class names exist in the elements list of class names
 * @param  {HTML Element} elm - HTML Element to test
 * @param  {...String} classNames - Class names to test
 * @return {Boolean} - All class name listed were found in the elements list of class names
 */
export default function hasClass(elm, ...classNames) {
  return classNames.every((cn) => elm.classList.contains(cn));
}
