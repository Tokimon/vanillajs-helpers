'use strict';

exports.default = isGenerator;
exports.isGeneratorFunction = isGeneratorFunction;
function isGenerator(obj) {
  return typeof obj.next === 'function' && typeof obj.throw === 'function';
}

function isGeneratorFunction(obj) {
  var constructor = obj.constructor;

  if (!constructor) {
    return false;
  }

  if (constructor.name === 'GeneratorFunction' || constructor.displayName === 'GeneratorFunction') {
    return true;
  }

  return isGenerator(constructor.prototype);
}