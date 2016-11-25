'use strict';

exports.default = hashCode;
exports.hashString = hashString;
// Shamelessly copied from:
// http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery

function hashCode(str) {
  // Math.abs added to make it a positive number
  return Math.abs(String(str).split('').reduce((a, b) => {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0));
}

function hashString(str) {
  const code = hashCode(str);
  return code ? code.toString(36) : '';
}