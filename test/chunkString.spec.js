/* eslint-env node, mocha, browser */
/* global expect, $ */

import chunkString from 'vanillajs-helpers/chunkString';

describe('"chunkString"', () => {
  it('Should return an array of strings', () => {
    let chunks = chunkString('abcd');
    expect(chunks).to.be.an('array').and.to.have.length(2);
    expect(chunks.every((str) => typeof str === 'string')).to.be.true;

    chunks = chunkString(123456789);
    expect(chunks).to.be.an('array').and.to.have.length(5);
    expect(chunks.every((str) => typeof str === 'string')).to.be.true;
  });

  it('Should return an array of strings of a given length', () => {
    let chunks = chunkString('abcd', 4);
    expect(chunks).to.be.an('array').and.to.have.length(1);
    expect(chunks.every((str) => typeof str === 'string')).to.be.true;

    chunks = chunkString(123456789, 4);
    expect(chunks).to.be.an('array').and.to.have.length(3);
    expect(chunks.every((str) => typeof str === 'string')).to.be.true;
  });

  it('Should return empty Array for empty values', () => {
    expect(chunkString()).to.be.an('array').and.to.have.length(0);
    expect(chunkString('')).to.be.an('array').and.to.have.length(0);
    expect(chunkString(0)).to.be.an('array').and.to.have.length(0);
    expect(chunkString(null)).to.be.an('array').and.to.have.length(0);
  });
});
