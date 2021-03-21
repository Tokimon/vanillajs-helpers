/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */
import isObject from './isObject';
import isFunction from './isFunction';



/**
 * Determine if the given object is a Generator(ish) object
 *
 * @example
 * ```ts
 * function *gen() {}
 *
 * isGeneratorLike(gen); // -> true
 * isGeneratorLike({ next() {}, throw() {} }); // -> true
 * isGeneratorLike(() => {}); // -> false
 * ```
 *
 * @param obj - Object to test
 * @return - Whether the object a Generator like function or not
 */
export function isGeneratorLike(obj: any): boolean {
  return isFunction(obj.next) && isFunction(obj.throw);
}



/**
 * Determine if the given object is a Generator Function
 *
 * @example
 * ```ts
 * function* gen() {}
 *
 * isGeneratorLike(gen); // -> true
 * isGeneratorLike(() => {}); // -> false
 * ```
 *
 * @param obj - Object to test
 * @return - Whether the object a Generator or not
 */
export default function isGenerator(obj: any): obj is GeneratorFunction {
  const { constructor } = obj;

  if (!isObject(constructor) && !isFunction(constructor)) {
    return false;
  }

  if (constructor.name === 'GeneratorFunction' || constructor.displayName === 'GeneratorFunction') {
    return true;
  }

  return isGeneratorLike(constructor.prototype);
}
