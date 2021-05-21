import randomId from '../randomId';

describe('"randomId"', () => {
  it('Should generate a random id of default length', () => {
    expect(/[a-z0-9]{10}/.test(randomId())).toBe(true);
  });

  it('Should generate a random id of specific length', () => {
    expect(/[a-z0-9]{100}/.test(randomId(100))).toBe(true);
  });
});
