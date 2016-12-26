/* eslint-env node, mocha */
/* eslint-disable no-new-wrappers */

import expect from './assets/chai';

import isGenerator, { isGeneratorLike } from '../isGenerator';

describe('"isGenerator"', () => {
  it('Should only return true for Generators', () => {
    expect(isGenerator(function *() {})).to.be.true;
    expect(isGenerator(function() {})).to.be.false;
  });
});

describe('"isGeneratorLike"', () => {
  it('Should only return true for Objets that implements `next` and `throw` functions', () => {
    expect(isGeneratorLike((function *() {})())).to.be.true;
    expect(isGeneratorLike({ next() {}, throw() {} })).to.be.true;

    expect(isGeneratorLike({ next() {} })).to.be.false;
    expect(isGeneratorLike({ throw() {} })).to.be.false;
    expect(isGeneratorLike(function() {})).to.be.false;
  });
});
