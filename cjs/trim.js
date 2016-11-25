'use strict';

exports.default = trim;
exports.trimLeft = trimLeft;
exports.trimRight = trimRight;
function trim(str, char) {
  str = str || '';
  if (!char) {
    return ('' + str).trim();
  }
  if (char.source) {
    char = char.source;
  }
  return ('' + str).replace(new RegExp(`^${ char }+|${ char }+$`, 'g'), '');
}

function trimLeft(str, char = '\\s') {
  str = str || '';
  if (char.source) {
    char = char.source;
  }
  return ('' + str).replace(new RegExp(`^${ char }+`, 'g'), '');
}

function trimRight(str, char = '[\\s]') {
  str = str || '';
  if (char.source) {
    char = char.source;
  }
  return ('' + str).replace(new RegExp(`${ char }+$`, 'g'), '');
}