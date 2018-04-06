/* eslint-env node, mocha */

import expect from './assets/chai';
import randomHexColor from '../randomHexColor';

describe('"randomHexColor"', () => {
  it('Should generate a random Hex color', () => {
    const hex = randomHexColor();
    expect(hex).to.be.a.string;
    expect(hex).to.satisfy((h: string) => /[a-f0-9]{6}/.test(h));
  });
});
