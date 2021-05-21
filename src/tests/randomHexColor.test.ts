import randomHexColor from '../randomHexColor';

describe('"randomHexColor"', () => {
  it('Should generate a random Hex color', () => {
    const hex = randomHexColor();

    expect(typeof hex).toBe('string');
    expect(hex).to.satisfy((h: string) => /[a-f0-9]{6}/.test(h));
  });
});
