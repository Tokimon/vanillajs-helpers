import objectType from '../objectType';

describe('"objectType"', () => {
  it('Should return the name of the given object', () => {
    expect(objectType({})).toBe('object');
    expect(objectType(null)).toBe('null');
    expect(objectType(undefined)).toBe('undefined');
    expect(objectType('')).toBe('string');
    expect(objectType(0)).toBe('number');
  });
});
