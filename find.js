/* eslint no-cond-assign: "off" */

import isHTMLElement from './isHTMLElement';

/**
 * Takes a selector and determines the correct method to find matching HTML elements in the DOM.
 * @param  {String} selector - CSS query selector to find elements from
 * @param  {HTMLElement} [elm=document] - The HTML Element from where to start the search
 * @param  {Boolean=false} [first=false] - Should the function only return the first or all found Elements
 * @return {Array<HTMLElement>|HTMLElement|NULL} - The found element(s) or null/empty array
 */
export default function find(selector, elm = document, first = false) {
  // Correct variables if 'elm' is omitted but 'first' isn't
  if(elm === true) { [elm, first] = [document, elm]; }

  // 'elm' has to be either a HTMLElement or 'document'
  if(!isHTMLElement(elm) || elm.nodeType === 9) { return first ? null : []; }

  let m, nodes;

  // References that are already on the document object
  const quickRef = {
    html: 'documentElement',
    body: 'body',
    head: 'head',
    img: 'images',
    form: 'forms',
    script: 'scripts',
    embed: 'embeds',
    ':stylesheet': 'styleSheets',
    ':link': 'links',
    '*': 'all'
  };

  // Quick references (html, body, img etc.)
  if(elm === document && quickRef[selector]) {
    nodes = elm[quickRef[selector]];

  // Options on a select box
  } else if(elm.options && selector === 'options') {
    nodes = elm.options;

  } else if([':comment', ':text'].indexOf(selector) > -1) {
    let node;
    nodes = [];
    const itr = document.createNodeIterator(elm, NodeFilter[`SHOW_${selector.substr(1).toUpperCase()}`], () => NodeFilter.FILTER_ACCEPT, false);
    while(node = itr.nextNode()) { nodes.push(node); }

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
  return first ? (isNaN(nodes.length) ? nodes : nodes[0]) : Array.from(nodes);
}
