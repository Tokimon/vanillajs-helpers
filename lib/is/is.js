'use strict';

function _toString(obj) { return Object.prototype.toString.call(obj); }

export default {
  string: obj => { return _toString(obj) === '[object String]'; },
  array: obj => { return Array.isArray(obj); },
  func: obj => { return typeof obj === 'function'; }
};
