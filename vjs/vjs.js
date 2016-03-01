'use strict';

import isFunc from 'lodash/lang/isFunction';
import isString from 'lodash/lang/isString';

import objString from '../lib/utils/objString';
import toIndexedObject from '../lib/utils/toIndexedObject';

import asArray from '../lib/utils/asArray';
import htmlToDom from '../lib/dom/manipulation/htmlToDom';

class $ {
  constructor( collection = [] ) {
    this.add(collection);
  }

  add(items = []) {
    toIndexedObject(this, asArray(items));
    return this;
  };
}

function vJs(input) {
  const objStr = objString(input).toLowerCase();
  if( objStr.includes('html') || objStr.includes('node') ) { return $(input); }

  if( isString(input) ) {
    if(input[0] === '<' && input[input.length -1] === '>') {
      const items = htmlToDom(input);
      if( items.length > 0 ) { return $(items); }
    }

    return $(find(input));
  }

  return $(input);
}

vJs.plugin = (name, handler) => {
  if( !isFunc(handler) ) { return $.prototype[name]; }
  if( $.prototype.hasOwnProperty(name) ) { console.warn(`Plugin: ${name} was overridden:`, handler); }
  $.prototype[name] = handler;
};

export default vJs;
