/* eslint-env node, mocha */

import expect from './assets/chai';
import hexToRGB from '../hexToRGB';

describe('"hexToRGB"', () => {
  it('Should generate a RGB array from a hex color', () => {
    expect(hexToRGB('#ff0000')).to.deep.equal([255, 0, 0]);
  });

  it('Should add the alpha channel if present', () => {
    expect(hexToRGB('#ff000080')).to.deep.equal([255, 0, 0, 0.5]);
  });
});
