/* eslint-env node, mocha, browser */
/* global expect, $ */

import randomRGBColor from 'vanillajs-helpers/randomRGBColor';

describe('"randomRGBColor"', () => {
  it('Should generate a random RGB color', () => {
    const rgb = randomRGBColor();
    expect(rgb.length).to.equal(3);
    expect(rgb[0]).to.be.at.satisfy((r) => r >= 0 && r <= 255);
    expect(rgb[1]).to.be.at.satisfy((g) => g >= 0 && g <= 255);
    expect(rgb[2]).to.be.at.satisfy((b) => b >= 0 && b <= 255);
  });
});
