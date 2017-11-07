/* eslint-env node, mocha */

import expect from './assets/chai';
import RGBToHex from '../ts/RGBToHex';

describe('"RGBToHex"', () => {
  it('Should generate a hex color from a RGB array', () => {
    expect(RGBToHex([255, 0, 0])).to.equal('#ff0000');
  });

  it('Should generate a hex color from a RGB entries', () => {
    expect(RGBToHex(0, 0, 255)).to.equal('#0000ff');
  });

  it('Should add the alpha channel if present', () => {
    expect(RGBToHex(0, 255, 0, 0.5)).to.equal('#00ff0080');
  });
});
