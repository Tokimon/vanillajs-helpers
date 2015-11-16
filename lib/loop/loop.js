'use strict';

export function each(arr, cb) {
  const len = arr.length;

  for(let i = 0; i < len; i++) {
    if(cb(arr[i], i, arr) === false) {
      break;
    }
  }

  return len;
}

export function eachRev(arr, cb) {
  const len = arr.length;

  for(let i = len; --i >= 0;) {
    if(cb(arr[i], i, arr) === false) {
      break;
    }
  }

  return len;
}

export function words(words, cb) {
  return each(words.split(' '), cb);
}
