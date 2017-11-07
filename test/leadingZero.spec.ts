/* eslint-env node, mocha */

import expect from './assets/chai';
import leadingZero from '../ts/leadingZero';

describe('"leadingZero"', () => {
  it('Should always return a string', () => {
    expect(leadingZero(123)).to.be.a('string');
    expect(leadingZero(null)).to.be.a('string');
    expect(leadingZero(undefined)).to.be.a('string');
  });

  it('Should add a zero to a value of just one character', () => {
    expect(leadingZero(1)).to.equal('01');
    expect(leadingZero('1')).to.equal('01');
    expect(leadingZero('|')).to.equal('0|');
  });

  it('Should add a zeroes to a value until it is the desired length', () => {
    expect(leadingZero(1, 5)).to.equal('00001');
    expect(leadingZero('123', 5)).to.equal('00123');
    expect(leadingZero(null, 5)).to.equal('0null');
  });

  it('Should return the value without zeroes if it is longer than the desired length', () => {
    expect(leadingZero(1, 1)).to.equal('1');
    expect(leadingZero('123', 2)).to.equal('123');
    expect(leadingZero(null)).to.equal('null');
    expect(leadingZero(undefined)).to.equal('undefined');
  });
});
