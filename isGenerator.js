import isFunction from './isFunction';

/**
 * Determine if the given object is a Generator(ish) object
 * @param  {Mixed} obj - Object to examine
 * @return {Boolean} - Whether or not the object is a Generator or not
 */
export function isGeneratorLike(obj) {
  return isFunction(obj.next) && isFunction(obj.throw);
}


/**
 * Determine if the given object is a Generator Function
 * @param  {Mixed} obj - Object to examine
 * @return {Boolean} - Whether or not the object is a Generator Funciton or not
 */
export default function isGenerator(obj) {
  var constructor = obj.constructor;

  if(!constructor) { return false; }
  if(constructor.name === 'GeneratorFunction' || constructor.displayName === 'GeneratorFunction') {
    return true;
  }

  return isGeneratorLike(constructor.prototype);
}
