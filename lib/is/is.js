'use strict';

function _toString(obj) { return Object.prototype.toString.call(obj); }

export function isString(obj) { return _toString(obj) === '[object String]'; }

export function isArray(obj) { return Array.isArray(obj); }

export function isFunc(obj) { return typeof obj === 'function'; }
