/* eslint-env node, mocha */

import expect from './assets/chai';
import hashCode, { hashString } from '../hash';

describe('"hashCode"', () => {
  it('Should always return a positive hash code', () => {
    expect(hashCode(null)).to.be.gt(0);
    expect(hashCode('')).to.equal(0);
    expect(hashCode(0)).to.be.gt(0);
    expect(hashCode(-0)).to.be.gt(0);
    expect(hashCode(-100)).to.be.gt(0);
  });

  it('Should always return a unique hash code', () => {
    expect(hashCode('abcdefg!!')).to.not.equal(hashCode('abcdegf!!'));
    expect(hashCode('abc/de/fg')).to.not.equal(hashCode('abc/d/efg'));
    expect(hashCode('')).to.not.equal(hashCode(0));
    expect(hashCode('')).to.not.equal(hashCode(null));
    expect(hashCode('')).to.not.equal(hashCode(undefined));

    // Special case
    expect(hashCode(-0)).to.equal(hashCode(0));
  });
});

describe('"hasString"', () => {
  it('Should always return a string', () => {
    expect(hashString(null)).to.be.a('string');
    expect(hashString('')).to.be.a('string').and.to.have.length(0);
    expect(hashString(0)).to.be.a('string');
    expect(hashString(-0)).to.be.a('string');
    expect(hashString(-100)).to.be.a('string');
  });

  it('Should always return a unique hash string', () => {
    expect(hashString('abcdefg!!')).to.not.equal(hashString('abcdegf!!'));
    expect(hashString('abc/de/fg')).to.not.equal(hashString('abc/d/efg'));
    expect(hashString('')).to.not.equal(hashString(0));
    expect(hashString('')).to.not.equal(hashString(null));
    expect(hashString('')).to.not.equal(hashString(undefined));
  });
});
