/* eslint-env node, mocha */

import expect from './assets/chai';
import objectType from '../objectType';

describe('"objectType"', () => {
  it('Should return the name of the given object', () => {
    expect(objectType({})).to.equal('object');
    expect(objectType(null)).to.equal('null');
    expect(objectType()).to.equal('undefined');
    expect(objectType('')).to.equal('string');
    expect(objectType(0)).to.equal('number');
  });
});
