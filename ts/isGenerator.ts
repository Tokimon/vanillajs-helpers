import isFunction from './isFunction';



/**
 * Determine if the given object is a Generator(ish) object
 */
export function isGeneratorLike(obj: any): boolean {
  return isFunction(obj.next) && isFunction(obj.throw);
}


/**
 * Determine if the given object is a Generator Function
 */
export default function isGenerator(obj: any): boolean {
  var constructor = obj.constructor;

  if(!constructor) { return false; }
  if(constructor.name === 'GeneratorFunction' || constructor.displayName === 'GeneratorFunction') {
    return true;
  }

  return isGeneratorLike(constructor.prototype);
}
