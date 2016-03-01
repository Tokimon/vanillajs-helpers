'use strict';

import each from 'lodash/each';

export default function toIterable( arr, obj = {} ) {
  let len = obj.length || 0;
  each(arr, (val) => { obj[++len] = val; });
  obj.length = len;
  return obj;
}
