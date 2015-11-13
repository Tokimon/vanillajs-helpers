'use strict';

import loop from '../loop/loop.js';

const dom = {
  find(selector, context = document) {
    return context.querySelectorAll(selector);
  },

  findOne(selector, context = document) {
    return context.querySelector(selector);
  },

  eachNode(selector, cb, context) {
    return loop.each(dom.find(selector, context), cb);
  },

  'class': {
    add(elm, classNames) {
      return loop.words(classNames, cn => {
        elm.classList.add(cn);
      });
    },

    remove(elm, classNames) {
      return loop.words(classNames, cn => {
        elm.classList.remove(cn);
      });
    },

    has(elm, classNames) {
      let oks = 0;

      const total = loop.words(classNames, cn => {
        const ok = elm.classList.contains(cn);
        if(ok) { oks++; }
      });

      return total === oks;
    },

    toggle(elm, classNames) {
      return loop.words(classNames, cn => {
        elm.classList.toggle(cn);
      });
    }
  },

  data(elm, dataName, data) {
    if(!dataName) { return null; }

    if(elm.dataset) {
      const oldVal = elm.dataset[dataName];
      if(data) { elm.dataset[dataName] = data; }
      return oldVal;
    }

    // Fallback to getting/setting attribute
    return dom.attr(elm, `data-${dataName}`, data);
  },

  attr(elm, attrName, value) {
    const oldVal = elm.getAttribute(attrName);
    if(value) { elm.setAttribute(attrName, value); }
    return oldVal;
  },

  children(elm) {
    if(!elm) { return []; }
    if(elm.children) { return elm.children; }
    return Array.from(elm.childNodes).filter(child => { return child.nodeType === 1; });
  }
};

export default dom;
