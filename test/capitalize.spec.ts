import expect from './assets/chai';
import capitalize from '../ts/capitalize';

describe('"capitalize"', () => {
  it('Should return empty string for falsy values', () => {
    expect(capitalize(undefined)).to.equal('');
    expect(capitalize(null)).to.equal('');
  });

  it('Should return capitalized string', () => {
    expect(capitalize('some string to capitalize')).to.equal('Some String To Capitalize');
    expect(capitalize('some string to-capitalize')).to.equal('Some String To-Capitalize');
    expect(capitalize('some string to_capitalize')).to.equal('Some String To_capitalize');
    expect(capitalize('some String TO capitalize')).to.equal('Some String TO Capitalize');
  });
});
