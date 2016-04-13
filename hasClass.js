import iterate from './iterate';

/**
 * [private method] iterate over each class name and dermines if it exists in the
 * list  of class names on the element. If {any} is set to true then it returns
 * true if at least one of the class names was found.
 * @param  {HTML Element} elm - The HTML Element in question
 * @param  {Array<String>} classNames - The list of class names to check
 * @param  {Boolean=false} any - Should every class name in the list exist in the elements list of class names
 * @return {Boolean} - Class names were found or not
 */
function _hasClass(elm, classNames, any = false) {
  let oks = 0;

  const total = iterate(classNames, cn => {
    const ok = elm.classList.contains(cn);
    if(ok) { oks++; return !any; }
  });

  return any ? !!oks : total === oks;
}

/**
 * Does all listed class names exist in the elements list of class names
 * @param  {HTML Element} elm - The HTML Element in question
 * @param  {Array<String>} classNames - Arguments array of class names
 * @return {Boolean} - All class name listed were found in the elements list of class names
 */
export default function hasClass(elm, ...classNames) {
  return _hasClass(elm, classNames);
}

/**
 * Does one of the listed class names exist in the elements list of class names
 * @param  {HTML Element} elm - The HTML Element in question
 * @param  {Array<String>} classNames - Arguments array of class names
 * @return {Boolean} - Did one of the class name listed exist the elements list of class names
 */
export function hasAnyClass(elm, ...classNames) {
  return _hasClass(elm, classNames, true);
}
