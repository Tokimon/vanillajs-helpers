/* eslint-env node, mocha, browser */

import expect from './assets/chai';
import truncate from '../truncate';

describe('"truncate"', () => {
  it('Should return the given entry when it is not string or maxlength is not given or longer than entry', () => {
    expect(truncate('This is not truncated')).to.equal('This is not truncated');
    expect(truncate(1234)).to.equal(1234);
    expect(truncate(1234567890, 5)).to.equal(1234567890);
    expect(truncate('Short string', 20)).to.equal('Short string');
  });

  it('Should shorten a string and add "..." to the end of it', () => {
    expect(truncate('Truncated string', 10)).to.equal('Truncated ...');
  });

  it('Should shorten a string and add a custom end to the end of it', () => {
    expect(truncate('Truncated string', 5, '???')).to.equal('Trunc???');
    expect(truncate('Truncated string', 10, '_')).to.equal('Truncated _');
  });
});
