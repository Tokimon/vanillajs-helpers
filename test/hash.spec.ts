/* eslint-env node, mocha */

import expect from './assets/chai';
import hash, { hashCode } from '../ts/hash';

describe('"hashCode"', () => {
  it('Should always return a positive hash code', () => {
    expect(hashCode(undefined)).to.equal(0);
    expect(hashCode(null)).to.equal(0);
    expect(hashCode('')).to.equal(0);
  });

  it('Should always return a unique hash code', () => {
    expect(hashCode('abcdefg!!')).to.not.equal(hashCode('abcdegf!!'));
    expect(hashCode('abc/de/fg')).to.not.equal(hashCode('abc/d/efg'));
  });

  it('Should always return a the same hash code', () => {
    expect(hashCode('same')).to.equal(hashCode('same'));
    expect(hashCode('#/!&?^1235[]()@$£¤*µù%èéàç')).to.equal(hashCode('#/!&?^1235[]()@$£¤*µù%èéàç'));
  });
});

describe('"hashString"', () => {
  it('Should return an empty string on falsy values', () => {
    expect(hash(undefined)).to.equal('');
    expect(hash(null)).to.equal('');
    expect(hash('')).to.equal('');
  });

  it('Should always return a unique hash string', () => {
    expect(hash('abcdefg!!')).to.not.equal(hash('abcdegf!!'));
    expect(hash('abc/de/fg')).to.not.equal(hash('abc/d/efg'));
  });
});
