/* eslint-disable no-unused-expressions */

import expect from './assets/chai';
import isGenerator, { isGeneratorLike } from '../isGenerator';

describe('"isGenerator"', () => {
  it('Should only return true for Generators', () => {
    expect(isGenerator(function *() { yield ''; })).to.be.true;
    expect(isGenerator(function() { return undefined; })).to.be.false;
    expect(isGenerator({ next: () => undefined, throw: () => undefined })).to.be.false;
    expect(isGenerator({ constructor: true })).to.be.false;
  });

  describe('"isGeneratorLike"', () => {
    it('Should only return true for Objets that implements `next` and `throw` functions', () => {
      expect(isGeneratorLike((function *() { yield ''; })())).to.be.true;
      expect(isGeneratorLike({ next: () => undefined, throw: () => undefined })).to.be.true;

      expect(isGeneratorLike({ next: () => undefined })).to.be.false;
      expect(isGeneratorLike({ throw: () => undefined })).to.be.false;
      expect(isGeneratorLike(function() { return undefined; })).to.be.false;
    });
  });
});
