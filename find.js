/* eslint no-cond-assign: "off" */

import isDOMDocument from './isDOMDocument';
import isFunction from './isFunction';
import isString from './isString';
import isArray from './isArray';

// References that are already on the document object
const quickRef = {
  html: 'documentElement',
  body: 'body',
  head: 'head',
  img: 'images',
  form: 'forms',
  script: 'scripts',
  embed: 'embeds',
  '*': 'all'
};

const wildcards = {
  ':stylesheet': { doc: 'styleSheets' },
  ':link': { doc: 'links', q: 'a[href]' },
  ':radio': { q: 'input[type=radio]' },
  ':checkbox': { q: 'input[type=checkbox]' }
}

function querySelect(elm, query, first) {
  if(first && elm.querySelector) { return [elm.querySelector(query)]; }
  if(elm.querySelectorAll) { return Array.from(elm.querySelectorAll(query)); }
  return [];
}

function _find(query, elm, first = false) {
  // All falsy 'elm' values defaults to 'document'
  if(!elm) { elm = document; }

  // 'queries' has to be an Array
  if(!isArray(queries)) {  return first ? null : []; }

  let nodes = [], m;

  // Quick references (html, body, img etc.)
  if(quickRef[query]) {
    nodes = isDOMDocument(elm) ? Array.from(document[quickRef[query]]) : querySelect(elm, query, first);

  // Options on a select box
  } else if(query === 'options') {
    nodes = elm.options || querySelect(elm, query, first);

  // ID, tag or wildcard
  } else if(m = /^([#:])?([\w-]+)$/.exec(query)) {
    // ID selection (if elm is specified then use querySelector)
    if(m[1] === '#') {
      nodes = isDOMDocument(elm) ? [document.getElementById(m[2])] : querySelect(elm, query, true);
      nodes = nodes[0] ? nodes : [];

    // Wildcard selection
    } else if(m[1] === ':') {
      // Wildcard selector
      const wc = wildcards[query];

      if(wc) {
        if(isDOMDocument(elm) && wc.doc) { nodes = Array.from(document[wc.doc]); }
        else if(wc.q) { nodes = querySelect(elm, wc.q, first); }

      // Comment or text nodes
      } else if([':comment', ':text'].indexOf(query) > -1) {
        const filter = NodeFilter[`SHOW_${query.substr(1).toUpperCase()}`];
        // Unfortunately 'createNodeIterator' doesn't return ES6 a iterator object ([Symbol.terator]),
        // so the while loop is necessary
        const itr = document.createNodeIterator(elm, filter, () => NodeFilter.FILTER_ACCEPT, false);

        let node;
        while(node = itr.nextNode()) {
          nodes.push(node);
          if(first) { break; }
        }
      }

    // Tag selection
    } else if(elm.getElementsByTagName) {
      nodes = Array.from(elm.getElementsByTagName(m[2]));
    }

  // Classname(s)
  } else if(m = /^(\.[\w-]+)+$/.exec(query)) {
    if(elm.getElementsByClassName) { nodes = Array.from(elm.getElementsByClassName(m[0].substr(1).replace(/\./g, ' '))); }

  // Name(s) (if an element is defined use query selector instead)
  } else if(m = /^\[name=["']?([^'"\]]+)["']?\]$/i.exec(query)) {
    nodes = isDOMDocument(elm) ? Array.from(document.getElementsByName(m[1])) : querySelect(elm, query, first);

  // When all other check fails, use querySelector
  } else {
    nodes = querySelect(elm, query, first);
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
  if(!isArray(queries)) {
    // Is it is a string split by comma (convert to Array) or fallback to empty array
    queries = isString(queries) ? queries.split(/\s*,\s*/) : [];
  }

  if(queries.length < 2) { return _find(queries[0], elm); }

  // If several expressions have been passed in
  // we need to create an unique array of the found nodes
  return Array.from(queries.reduce((set, query) => {
    if(!isString(query)) { return set; }
    _find(query, elm).forEach((node) => set.add(node));
    return set;
  }, new Set()));
}




/**
 * Shortcut function to find(selector, elm, true). Returns the first found element.
 * @param  {String} selector - CSS query selector
 * @param  {HTMLElement} [elm=document] - The HTML Element from where to start the search
 * @return {HTMLElement|NULL} - The found element or null
 */
export default function findOne(queries, elm) {
  if(!isArray(queries)) {
    // Is it is a string split by comma (convert to Array) or fallback to empty array
    queries = isString(queries) ? queries.split(/\s*,\s*/) : [];
  }

  let node = null;
  queries.some((arr, query) => !!(node = _find(query, elm, true)));
  return node;
}
