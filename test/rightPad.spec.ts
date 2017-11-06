/* eslint-env node, mocha */

import expect from './assets/chai';
import rightPad from '../rightPad';

describe('"rightPad"', () => {
  it('Should always return a string', () => {
    expect(rightPad(123)).to.be.a('string');
    expect(rightPad({})).to.be.a('string');
    expect(rightPad(null)).to.be.a('string');
    expect(rightPad()).to.be.a('string');
  });

  it('Should not add padding if no length is given', () => {
    expect(rightPad('')).to.equal('');
    expect(rightPad('abc')).to.equal('abc');
  });

  it('Should pad a string until it is the desired length', () => {
    expect(rightPad('abc', 5)).to.equal('abc  ');
    expect(rightPad('abc', 3)).to.equal('abc');
    expect(rightPad('abc', 2)).to.equal('abc');
  });

  it('Should pad with a given character', () => {
    expect(rightPad('abc', 5, '-')).to.equal('abc--');
    expect(rightPad('abc', 2, '-')).to.equal('abc');
  });
});
