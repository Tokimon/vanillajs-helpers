import expect from './assets/chai';
import RGBToHex from '../RGBToHex';

describe('"RGBToHex"', () => {
  it('Should generate a hex color from a RGB array', () => {
    expect(RGBToHex([255, 0, 0])).toBe('#ff0000');
  });

  it('Should generate a hex color from a RGB entries', () => {
    expect(RGBToHex(0, 0, 255)).toBe('#0000ff');
  });

  it('Should add the alpha channel if present', () => {
    expect(RGBToHex(0, 255, 0, 0.5)).toBe('#00ff0080');
  });
});
