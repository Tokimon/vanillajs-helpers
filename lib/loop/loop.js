'use strict';

const loop = {
  each(arr, cb) {
    const len = arr.length;

    for(let i = 0; i < len; i++) {
      if(cb(arr[i], i, arr) === false) {
        break;
      }
    }

    return len;
  },

  eachRev(arr, cb) {
    const len = arr.length;

    for(let i = len; --i >= 0;) {
      if(cb(arr[i], i, arr) === false) {
        break;
      }
    }

    return len;
  },

  words(words, cb) {
    return loop.each(words.split(' '), cb);
  }
};

export default loop;
