import isBoolean from '../isBoolean';

describe('"isBoolean"', () => {
  it.each([
    true,
    false,
    Boolean(1),
    Boolean(0),
    // eslint-disable-next-line no-new-wrappers
    new Boolean(0),
    // eslint-disable-next-line no-new-wrappers
    new Boolean(1)
  ])('Returns `true` for Boolean values: %s', (input, output) => {
    expect(isBoolean(input)).toBe(output);
  });

  it.each([
    'true',
    'false',
    0,
    1,
    null,
    undefined
  ])('Returns `false` for non Boolean values: %s', (input, output) => {
    expect(isBoolean(input)).toBe(output);
  });
});
