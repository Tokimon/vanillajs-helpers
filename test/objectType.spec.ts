import expect from './assets/chai';
import objectType from '../ts/objectType';

describe('"objectType"', () => {
  it('Should return the name of the given object', () => {
    expect(objectType({})).to.equal('object');
    expect(objectType(null)).to.equal('null');
    expect(objectType(undefined)).to.equal('undefined');
    expect(objectType('')).to.equal('string');
    expect(objectType(0)).to.equal('number');
  });
});
