export default function isGenerator(obj) {
  return typeof obj.next === 'function' && typeof obj.throw === 'function';
}

export function isGeneratorFunction(obj) {
  var constructor = obj.constructor;

  if(!constructor) { return false; }

  if(constructor.name === 'GeneratorFunction' || constructor.displayName === 'GeneratorFunction') {
    return true;
  }

  return isGenerator(constructor.prototype);
}
