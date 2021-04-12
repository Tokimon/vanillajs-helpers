/* eslint-disable no-unused-expressions */

import expect from './assets/chai';
import isGeneratorFunction, { isGenerator } from '../isGenerator';

describe('"isGenerator"', () => {
  const generatorMock = {
    next: () => undefined,
    throw: () => undefined,
    return: () => undefined
    // [Symbol.iterator]: () => undefined
  };

  it('Should only return true for Generators', () => {
    expect(isGeneratorFunction(function *() { yield ''; })).to.be.true;
    expect(isGeneratorFunction(function() { return undefined; })).to.be.false;
    expect(isGeneratorFunction(generatorMock)).to.be.false;
    expect(isGeneratorFunction({ constructor: true })).to.be.false;
  });

  describe('"isGeneratorLike"', () => {
    it('Should only return true for Objects that implements `next` and `throw` functions', () => {
      expect(isGenerator((function *() { yield ''; })())).to.be.true;
      expect(isGenerator(generatorMock)).to.be.true;

      expect(isGenerator({ next: () => undefined })).to.be.false;
      expect(isGenerator({ throw: () => undefined })).to.be.false;
      expect(isGenerator(function() { return undefined; })).to.be.false;
    });
  });
});
