Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isGenerator;
exports.isGeneratorFunction = isGeneratorFunction;
// TODO: The names are not quite accurate, should be refactored (isGeneratorFunction tests for generator in general fx)

/**
 * Determine if the given object is a Generator(ish) object
 * @param  {Mixed} obj - Object to examine
 * @return {Boolean} - Whether or not the object is a Generator or not
 */
function isGenerator(obj) {
  return typeof obj.next === 'function' && typeof obj.throw === 'function';
}

/**
 * Determine if the given object is a Generator Function
 * @param  {Mixed} obj - Object to examine
 * @return {Boolean} - Whether or not the object is a Generator Funciton or not
 */
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