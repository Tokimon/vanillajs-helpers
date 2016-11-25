/* eslint-env node, mocha, browser */
/* global expect, $ */

import trim, { trimLeft, trimRight } from 'vanillajs-helpers/trim';

describe('"trim"', () => {
  it('Should trim spaces and linebreaks from both ends of a string', () => {
    expect(trim('   Trim me')).to.equal('Trim me');
    expect(trim('Trim me    ')).to.equal('Trim me');
    expect(trim('   Trim me    ')).to.equal('Trim me');
    expect(trim(`
      Trim me
    `)).to.equal('Trim me');
  });

  it('Should trim a given character or string from both ends of a string', () => {
    expect(trim('---Trim me', '-')).to.equal('Trim me');
    expect(trim('Trim me---', '-')).to.equal('Trim me');
    expect(trim('---Trim me---', '-')).to.equal('Trim me');
    expect(trim('---  Trim me  ---', '-')).to.equal('  Trim me  ');
  });

  it('Should trim both ends of a string using a regular expression', () => {
    expect(trim('--  Trim me', /[- ]/)).to.equal('Trim me');
    expect(trim('--  Trim me', '[- ]')).to.equal('Trim me');
    expect(trim('Trim me  -- -', /[- ]/)).to.equal('Trim me');
    expect(trim('Trim me -- -', '[- ]')).to.equal('Trim me');
    expect(trim('---  Trim me  ---', /[- ]/)).to.equal('Trim me');
    expect(trim('---  Trim me  ---', '[- ]')).to.equal('Trim me');
  });

  it('Should return empty string for empty values', () => {
    expect(trim('')).to.equal('');
    expect(trim()).to.equal('');
    expect(trim(null)).to.equal('');
    expect(trim(0)).to.equal('');
    expect(trim(9)).to.equal('9');
  });
});

describe('"trimLeft"', () => {
  it('Should trim spaces and linebreaks from the left side of a string', () => {
    expect(trimLeft('   Trim me')).to.equal('Trim me');
    expect(trimLeft('Trim me    ')).to.equal('Trim me    ');
    expect(trimLeft('   Trim me    ')).to.equal('Trim me    ');
    expect(trimLeft(`
      Trim me
    `)).to.equal(`Trim me
    `);
  });

  it('Should trim a given character or string from the left side of a string', () => {
    expect(trimLeft('---Trim me', '-')).to.equal('Trim me');
    expect(trimLeft('Trim me---', '-')).to.equal('Trim me---');
    expect(trimLeft('---Trim me---', '-')).to.equal('Trim me---');
    expect(trimLeft('---  Trim me  ---', '-')).to.equal('  Trim me  ---');
  });

  it('Should trim the left side of a string using a regular expression', () => {
    expect(trimLeft('--  Trim me', /[- ]/)).to.equal('Trim me');
    expect(trimLeft('--  Trim me', '[- ]')).to.equal('Trim me');
    expect(trimLeft('---  Trim me  ---', /[- ]/)).to.equal('Trim me  ---');
    expect(trimLeft('---  Trim me  ---', '[- ]')).to.equal('Trim me  ---');
  });

  it('Should return empty string for empty values', () => {
    expect(trimLeft('')).to.equal('');
    expect(trimLeft()).to.equal('');
    expect(trimLeft(null)).to.equal('');
    expect(trimLeft(0)).to.equal('');
    expect(trimLeft(9)).to.equal('9');
  });
});

describe('"trimRight"', () => {
  it('Should trim spaces and linebreaks from the right side of a string', () => {
    expect(trimRight('   Trim me')).to.equal('   Trim me');
    expect(trimRight('Trim me    ')).to.equal('Trim me');
    expect(trimRight('   Trim me    ')).to.equal('   Trim me');
    expect(trimRight(`
      Trim me
    `)).to.equal(`
      Trim me`);
  });

  it('Should trim a given character or string from the right side of a string', () => {
    expect(trimRight('---Trim me', '-')).to.equal('---Trim me');
    expect(trimRight('Trim me---', '-')).to.equal('Trim me');
    expect(trimRight('---Trim me---', '-')).to.equal('---Trim me');
    expect(trimRight('---  Trim me  ---', '-')).to.equal('---  Trim me  ');
  });

  it('Should trim the right side of a string using a regular expression', () => {
    expect(trimRight('Trim me - -', /[- ]/)).to.equal('Trim me');
    expect(trimRight('Trim me - -', '[- ]')).to.equal('Trim me');
    expect(trimRight('---  Trim me  ---', /[- ]/)).to.equal('---  Trim me');
    expect(trimRight('---  Trim me  ---', '[- ]')).to.equal('---  Trim me');
  });

  it('Should return empty string for empty values', () => {
    expect(trimRight('')).to.equal('');
    expect(trimRight()).to.equal('');
    expect(trimRight(null)).to.equal('');
    expect(trimRight(0)).to.equal('');
    expect(trimRight(9)).to.equal('9');
  });
});
