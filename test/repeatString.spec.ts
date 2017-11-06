/* eslint-env node, mocha */

import expect from './assets/chai';
import repeatString from '../repeatString';

describe('"repeatString"', () => {
  it('Should always return a string', () => {
    expect(repeatString(1)).to.be.a('string');
    expect(repeatString({})).to.be.a('string');
    expect(repeatString(null)).to.be.a('string');
    expect(repeatString()).to.be.a('string');
  });

  it('Should create a string with the given char repeated', () => {
    expect(repeatString('-', 5)).to.equal('-----');
  });

  it('Should create a string with the given string repeated', () => {
    expect(repeatString('-abc', 3)).to.equal('-abc-abc-abc');
  });

  it('Should return an empty string if length is 0', () => {
    expect(repeatString('-')).to.equal('');
    expect(repeatString('-', 0)).to.equal('');
  });
});
