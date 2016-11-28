/* eslint-env node, mocha */
/* eslint-disable no-new-wrappers */

import expect from './assets/chai';
import isCollection from '../isCollection';

describe('"isCollection"', () => {
  it('Should return true for Arrays', () => {
    expect(isCollection([])).to.be.true;
    expect(isCollection(new Array())).to.be.true;
  });

  it('Should return true for objects with a length value', () => {
    expect(isCollection({ length: 0 })).to.be.true;
  });

  it('Should return false for non Collections', () => {
    expect(isCollection({ 0: 1, 1: 2 })).to.be.false;
    expect(isCollection(1)).to.be.false;
    expect(isCollection(null)).to.be.false;
    expect(isCollection()).to.be.false;
  });
});
