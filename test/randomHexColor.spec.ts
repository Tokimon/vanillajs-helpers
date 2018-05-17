/* tslint:disable:no-new-func, no-unused-expression */

import expect from './assets/chai';
import randomHexColor from '../ts/randomHexColor';

describe('"randomHexColor"', () => {
  it('Should generate a random Hex color', () => {
    const hex = randomHexColor();
    expect(hex).to.be.a.string;
    expect(hex).to.satisfy((h: string) => /[a-f0-9]{6}/.test(h));
  });
});
