'use strict';

import find from './find';

export function findOne(selector, context = document) {
  return find(selector, context, true);
}