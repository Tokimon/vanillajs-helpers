/* eslint-env node, mocha */

import expect from './assets/chai';
import hash, { hashCode } from '../hash';

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
    expect(hash(null)).to.be.a('string');
    expect(hash('')).to.be.a('string').and.to.have.length(0);
    expect(hash(0)).to.be.a('string');
    expect(hash(-0)).to.be.a('string');
    expect(hash(-100)).to.be.a('string');
  });

  it('Should always return a unique hash string', () => {
    expect(hash('abcdefg!!')).to.not.equal(hash('abcdegf!!'));
    expect(hash('abc/de/fg')).to.not.equal(hash('abc/d/efg'));
    expect(hash('')).to.not.equal(hash(0));
    expect(hash('')).to.not.equal(hash(null));
    expect(hash('')).to.not.equal(hash(undefined));
  });
});
