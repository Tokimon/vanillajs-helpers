/* eslint-env node, mocha */

import expect from './assets/chai';
import randomRGBColor from '../randomRGBColor';

describe('"randomRGBColor"', () => {
  it('Should generate a random RGB color', () => {
    const rgb = randomRGBColor();
    expect(rgb.length).to.equal(3);
    expect(rgb[0]).to.satisfy((r: number) => r >= 0 && r <= 255);
    expect(rgb[1]).to.satisfy((g: number) => g >= 0 && g <= 255);
    expect(rgb[2]).to.satisfy((b: number) => b >= 0 && b <= 255);
  });
});
