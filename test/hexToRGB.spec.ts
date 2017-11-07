/* eslint-env node, mocha */

import expect from './assets/chai';
import hexToRGB from '../ts/hexToRGB';

describe('"hexToRGB"', () => {
  it('Should generate a RGB array from falsy values', () => {
    expect(hexToRGB('')).to.deep.equal([0, 0, 0]);
    expect(hexToRGB(null)).to.deep.equal([0, 0, 0]);
    expect(hexToRGB(undefined)).to.deep.equal([0, 0, 0]);
  });

  it('Should generate a RGB array from a hex color', () => {
    expect(hexToRGB('#ff0000')).to.deep.equal([255, 0, 0]);
  });

  it('Should add the alpha channel if present', () => {
    expect(hexToRGB('#ff000080')).to.deep.equal([255, 0, 0, 0.5]);
  });
});
