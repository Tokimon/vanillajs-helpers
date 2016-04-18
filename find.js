/* eslint no-cond-assign: "off" */

/**
 * Takes a selector and determines the correct method to find matching HTML elements in the DOM.
 * @param  {String} selector - CSS query selector to find elements from
 * @param  {HTMLElement} [elm=document] - The HTML Element from where to start the search
 * @param  {Boolean=false} [first=false] - Should the function only return the first or all found Elements
 * @return {Array<HTMLElement>|HTMLElement|NULL} - The found element(s) or null/empty array
 */
export default function find(selector, elm = document, first=false) {
  let m, nodes;
  const quickRef = { html: 'documentElement', body: 'body', img: 'images', form: 'forms', script: 'scripts', '*': 'all' };

  // Quick references (html, body, img etc.)
  if(elm === document && quickRef[selector]) {
    nodes = elm[quickRef[selector]];

  // Tag or ID
  } else if(m = /^(#)?([\w-]+)$/.exec(selector)) {
    nodes = elm[`getElement${m[1] ? 'ById' : 'sByTagName'}`](m[2]);

  // classname(s)
  } else if(m = /^[.\w-]+$/.exec(selector)) {
    nodes = elm.getElementsByClassName(m[0].replace(/\./g, ' '));

  // name selection
  } else if(m = /^[\[]name=["']?([^'"\]]+)["']?[\]]$/i.exec(selector)) {
    nodes = elm.getElementsByName(m[1]);

  // query selection
  } else {
    nodes = elm[`querySelector${first ? '' : 'All'}`](selector);
  }

  if(!nodes) { return first ? null : []; }
  return first ? (isNaN(nodes.length) ? nodes : nodes[0]) : [...nodes];
}




/**
 * Shortcut function to find(selector, elm, true). Returns the first found element.
 * @param  {String} selector - CSS query selector
 * @param  {HTMLElement} [elm=document] - The HTML Element from where to start the search
 * @return {HTMLElement|NULL} - The found element or null
 */
export function findOne(selector, elm = document) {
  return find(selector, elm, true);
}
