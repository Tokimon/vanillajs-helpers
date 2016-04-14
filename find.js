/* eslint no-cond-assign: "off" */

/**
 * Uses the correct method to find elements in the DOM from a given selector
 * @param  {String} selector - CSS query selector
 * @param  {HTMLElement=document} elm - The HTML Element from where to start the search
 * @param  {Boolean=false} first - Should the function only return the first found Element or All
 * @return {Array<HTMLElement>|HTMLElement|NULL} - The found element(s) or null/empty array
 */
export default function find(selector, elm = document, first=false) {
  let m, nodes;

  // HTML tag
  if(selector === 'html') {
    nodes = document.documentElement;

  // Body tag
  } else if(selector === 'body') {
    nodes = document.body;

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
 * Finds the first HTML Element from a given selector
 * (Shortcut for `find(selector, elm, true)`)
 * @param  {String} selector - CSS query selector
 * @param  {HTMLElement=document} elm - The HTML Element from where to start the search
 * @return {HTMLElement|NULL} - The found element or null
 */
export function findOne(selector, elm = document) {
  return find(selector, elm, true);
}
