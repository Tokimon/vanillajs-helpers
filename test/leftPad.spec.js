/* eslint-env node, mocha */

import expect from './assets/chai';
import leftPad from '../leftPad';

describe('"leftPad"', () => {
  it('Should always return a string', () => {
    expect(leftPad(123)).to.be.a('string');
    expect(leftPad({})).to.be.a('string');
    expect(leftPad(null)).to.be.a('string');
    expect(leftPad()).to.be.a('string');
  });

  it('Should not add padding if no length is given', () => {
    expect(leftPad('')).to.equal('');
    expect(leftPad('abc')).to.equal('abc');
  });

  it('Should pad a string until it is the desired length', () => {
    expect(leftPad('abc', 5)).to.equal('  abc');
    expect(leftPad('abc', 3)).to.equal('abc');
    expect(leftPad('abc', 2)).to.equal('abc');
  });

  it('Should pad with a given character', () => {
    expect(leftPad('abc', 5, '-')).to.equal('--abc');
    expect(leftPad('abc', 2, '-')).to.equal('abc');
  });
});
