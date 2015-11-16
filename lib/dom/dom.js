'use strict';

import { words, each } from '../loop/loop.js';

export function find(selector, context = document) {
  return context.querySelectorAll(selector);
}

export function findOne(selector, context = document) {
  return context.querySelector(selector);
}

export function eachNode(selector, cb, context) {
  return each(find(selector, context), cb);
}

export const classname = {
  add(elm, classNames) {
    return words(classNames, cn => {
      elm.classList.add(cn);
    });
  },

  remove(elm, classNames) {
    return words(classNames, cn => {
      elm.classList.remove(cn);
    });
  },

  has(elm, classNames) {
    let oks = 0;

    const total = words(classNames, cn => {
      const ok = elm.classList.contains(cn);
      if(ok) { oks++; }
    });

    return total === oks;
  },

  toggle(elm, classNames) {
    return words(classNames, cn => {
      elm.classList.toggle(cn);
    });
  }
};

export function data(elm, dataName, data) {
  if(!dataName) { return null; }

  if(elm.dataset) {
    const oldVal = elm.dataset[dataName];
    if(data) { elm.dataset[dataName] = data; }
    return oldVal;
  }

  // Fallback to getting/setting attribute
  return attr(elm, `data-${dataName}`, data);
}

export function attr(elm, attrName, value) {
  const oldVal = elm.getAttribute(attrName);
  if(value) { elm.setAttribute(attrName, value); }
  return oldVal;
}

export function children(elm) {
  if(!elm) { return []; }
  if(elm.children) { return elm.children; }
  // TODO: Use loop method? this action is a bit slow
  return Array.from(elm.childNodes).filter(child => { return child.nodeType === 1; });
}
