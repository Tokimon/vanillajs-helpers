'use strict';

export default function toIterable( arr, obj = {} ) {
  Array.prototype.push.apply(obj, arr);
  return obj;
}
