'use strict';

export default {
  randomId(length) {
    return Math.random().toString(36).substr(2, length);
  }
};
