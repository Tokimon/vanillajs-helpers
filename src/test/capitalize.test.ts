import expect from './assets/chai';
import capitalize from '../capitalize';

describe('"capitalize"', () => {
  it('Should return capitalized string', () => {
    expect(capitalize('some string to capitalize')).to.equal('Some String To Capitalize');
    expect(capitalize('some string to-capitalize')).to.equal('Some String To-Capitalize');
    expect(capitalize('some string to_capitalize')).to.equal('Some String To_capitalize');
    expect(capitalize('some String TO capitalize')).to.equal('Some String TO Capitalize');
  });
});
