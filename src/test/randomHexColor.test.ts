/* eslint-disable no-unused-expressions */

import expect from './assets/chai';
import randomHexColor from '../randomHexColor';

describe('"randomHexColor"', () => {
  it('Should generate a random Hex color', () => {
    const hex = randomHexColor();

    expect(typeof hex).to.equal('string');
    expect(hex).to.satisfy((h: string) => /[a-f0-9]{6}/.test(h));
  });
});