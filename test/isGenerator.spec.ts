/* tslint:disable:no-new-func, no-unused-expression */

import expect from './assets/chai';
import isGenerator, { isGeneratorLike } from '../ts/isGenerator';

describe('"isGenerator"', () => {
  it('Should only return true for Generators', () => {
    expect(isGenerator(function *() { yield ''; })).to.be.true;
    expect(isGenerator(function() { void 0; })).to.be.false;
    expect(isGenerator({ next() { void 0; }, throw() { void 0; } })).to.be.false;
    expect(isGenerator({ constructor: true })).to.be.false;
  });
});

describe('"isGeneratorLike"', () => {
  it('Should only return true for Objets that implements `next` and `throw` functions', () => {
    expect(isGeneratorLike((function *() { yield ''; })())).to.be.true;
    expect(isGeneratorLike({ next() { void 0; }, throw() { void 0; } })).to.be.true;

    expect(isGeneratorLike({ next() { void 0; } })).to.be.false;
    expect(isGeneratorLike({ throw() { void 0; } })).to.be.false;
    expect(isGeneratorLike(function() { void 0; })).to.be.false;
  });
});
