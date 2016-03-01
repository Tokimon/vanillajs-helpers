'use strict';

export default function randomId(length) {
  return Math.random().toString(36).substr(2, length);
}
