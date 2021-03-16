import expect from './assets/chai';
import truncate from '../truncate';

describe('"truncate"', () => {
  it('Should return the given entry when "maxLength" is not given', () => {
    const str = 'This is not truncated';
    expect(truncate(str)).to.equal(str);
  });

  it('Should return the given entry when "maxLength" is higher than entry length', () => {
    const str = 'Short string';
    expect(truncate(str, { maxLength: 20 })).to.equal(str);
  });

  it('Should shorten a string and add "..." to the end of it', () => {
    expect(truncate('Truncated string', { maxLength: 10 })).to.equal('Truncated ...');
  });

  it('Should shorten a string and add a custom end to the end of it', () => {
    expect(truncate('Truncated string', { maxLength: 5, end: '???' })).to.equal('Trunc???');
    expect(truncate('Truncated string', { maxLength: 10, end: '_' })).to.equal('Truncated _');
  });
});
