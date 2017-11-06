/* eslint-env node, mocha */

import expect from './assets/chai';
import hexToNumber from '../hexToNumber';

describe('"hexToNumber"', () => {
  it('Should generate a number from hexadecimal', () => {
    expect(hexToNumber('fa')).to.equal(250);
  });
});
