/* eslint no-cond-assign: "off" */

import isString from './isString';
import isArray from './isArray';

const wildcards = {
  ':stylesheet': { ref: 'styleSheets', q: 'link[rel="stylesheet"], link:not([rel]), style', f: (style) => style.sheet || null },
  ':input': { q: 'input:not([type=button]):not([type=submit]):not([type=reset]):not([type=image]):not([type=hidden]), select, textarea' },
  ':input-text': { q: 'input:not([type]), input[type=text], input[type=email], input[type=password], input[type=search], input[type=url], input[type=tel], textarea' },
  ':input-date': { q: 'input[type=date], input[type=datetime], input[type=datetime-local], input[type=month], input[type=time], input[type=week]' },
  ':input-number': { q: 'input[type=number], input[type=range]' },
  ':radio': { q: 'input[type=radio]' },
  ':checkbox': { q: 'input[type=checkbox]' },
  ':button': { q: 'input[type=button], input[type=submit], input[type=reset], input[type=image], button' },
  ':comment': { f: specialNodes('COMMENT') },
  ':text': { f: specialNodes('TEXT') }
};

function specialNodes(type) {
  return (elm, first) => {
    const nodes = [];
    const filter = NodeFilter[`SHOW_${type}`];
    // Unfortunately 'createNodeIterator' doesn't return ES6 a iterator object ([Symbol.terator]),
    // so the while loop is necessary
    const itr = document.createNodeIterator(elm, filter, () => NodeFilter.FILTER_ACCEPT, false);

    let node;
    while(node = itr.nextNode()) {
      nodes.push(node);
      if(first) { break; }
    }

    return nodes;
  };
}

function q(elm, query, first) {
  return  first ? [elm.querySelector(query)] : Array.from(elm.querySelectorAll(query));
}

function _find(elm, query, first) {
  let nodes = [], m;

  // Wildcard selector
  const wc = wildcards[query];

  if(wc) {
    if(wc.ref && typeof elm[wc.ref] !== 'undefined') {
      nodes = Array.from(elm[wc.ref]);
    } else if(wc.q) {
      nodes = q(elm, wc.q);
      if(wc.f) { nodes = Array.from(nodes).map(wc.f); }
    } else if(wc.f) {
      nodes = wc.f(elm, first);
    }
  } else {
    nodes = q(elm, query, first);
  }

  return first ? nodes[0] || null : nodes;
}




/**
 * Takes a selector and determines the correct method to find matching HTML elements in the DOM.
 * @param  {String} queries - CSS query selector to find elements from
 * @param  {HTMLElement} [elm=document] - The HTML Element from where to start the search
 * @return {Array<HTMLElement>|HTMLElement|NULL} - The found element(s) or null/empty array
 */
export default function find(queries, elm) {
  if(!elm) { elm = document; }

  if(isString(queries)){
    try { return q(elm, queries); }
    catch(ex) { queries = queries.split(/\s*,\s*/); }
  } else if(isArray(queries)) {
    try { return q(elm, queries.join(',')); }
    catch(ex) {}
  } else {
    return [];
  }

  if(queries.length < 2) { return _find(elm, queries[0]); }

  // We need to create an unique array of the found nodes
  return Array.from(queries.reduce((set, query) => {
    if(isString(query)) {
      let res;
      try { res = _find(elm, query); } catch(ex) { res = []; }
      res.forEach((node) => node && set.add(node));
    }

    return set;
  }, new Set()));
}




/**
 * Shortcut function to find(selector, elm, true). Returns the first found element.
 * @param  {String} selector - CSS query selector
 * @param  {HTMLElement} [elm=document] - The HTML Element from where to start the search
 * @return {HTMLElement|NULL} - The found element or null
 */
export function findOne(queries, elm) {
  if(!elm) { elm = document; }

  if(isString(queries)){
    try { return q(elm, queries, true)[0] || null; }
    catch(ex) { queries = queries.split(/\s*,\s*/); }
  } else if(isArray(queries)) {
    try { return q(elm, queries.join(','), true)[0] || null; }
    catch(ex) {}
  } else {
    return null;
  }

  // Just return the first found non-null node (or null if none at all was found)
  let node = null, i=0;

  while(!node) {
    const query = queries[i++];
    if(isString(query)) {
      try { node = _find(elm, query, true); } catch(ex) { node = null; }
    }
  }

  return node;
}
