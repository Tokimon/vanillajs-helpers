import isFunction from './isFunction';
export function isGeneratorLike(obj) {
    return isFunction(obj.next) && isFunction(obj.throw);
}
export default function isGenerator(obj) {
    var constructor = obj.constructor;
    if (!constructor) {
        return false;
    }
    if (constructor.name === 'GeneratorFunction' || constructor.displayName === 'GeneratorFunction') {
        return true;
    }
    return isGeneratorLike(constructor.prototype);
}
