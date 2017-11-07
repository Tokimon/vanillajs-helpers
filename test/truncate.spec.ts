/* eslint-env node, mocha */

import expect from './assets/chai';
import truncate from '../ts/truncate';

describe('"truncate"', () => {
  it('Should return the given entry when it is not a string or maxlength is not given or longer than entry', () => {
    expect(truncate('This is not truncated')).to.equal('This is not truncated');
    expect(truncate('Short string', { maxLength: 20 })).to.equal('Short string');
  });

  it('Should shorten a string and add "..." to the end of it', () => {
    expect(truncate('Truncated string', { maxLength: 10 })).to.equal('Truncated ...');
  });

  it('Should shorten a string and add a custom end to the end of it', () => {
    expect(truncate('Truncated string', { maxLength: 5, end: '???' })).to.equal('Trunc???');
    expect(truncate('Truncated string', { maxLength: 10, end: '_' })).to.equal('Truncated _');
  });
});
