import isObject from './isObject';
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
  const { constructor } = obj;

  if(!isObject(constructor) && !isFunction(constructor)) { return false; }
  if(constructor.name === 'GeneratorFunction' || constructor.displayName === 'GeneratorFunction') {
    return true;
  }

  return isGeneratorLike(constructor.prototype);
}
