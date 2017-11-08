/* eslint-env node, mocha */

import expect from './assets/chai';
import isGenerator, { isGeneratorLike } from '../ts/isGenerator';

describe('"isGenerator"', () => {
  it('Should only return true for Generators', () => {
    expect(isGenerator(function *() { yield ''; })).to.be.true;
    expect(isGenerator(function() {})).to.be.false;
    expect(isGenerator({ next() {}, throw() {} })).to.be.false;
    expect(isGenerator({ constructor: true })).to.be.false;
  });
});

describe('"isGeneratorLike"', () => {
  it('Should only return true for Objets that implements `next` and `throw` functions', () => {
    expect(isGeneratorLike((function *() { yield ''; })())).to.be.true;
    expect(isGeneratorLike({ next() {}, throw() {} })).to.be.true;

    expect(isGeneratorLike({ next() {} })).to.be.false;
    expect(isGeneratorLike({ throw() {} })).to.be.false;
    expect(isGeneratorLike(function() {})).to.be.false;
  });
});
