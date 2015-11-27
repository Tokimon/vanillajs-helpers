'use strict';

function _toString(obj) { return Object.prototype.toString.call(obj); }
export default function isString(obj) { return _toString(obj) === '[object String]'; }
