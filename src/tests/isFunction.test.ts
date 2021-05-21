import isFunction from '../isFunction';



describe('"isFunction"', () => {
  it.each([
    function() { return undefined; },
    () => undefined,
    // eslint-disable-next-line no-new-func
    new Function()
  ])('Returns `true` for Function values', (fn) => {
    expect(isFunction(fn)).toBe(true);
  });

  it.each([
    null,
    'Function',
    undefined
  ])('Return `false` for non Function values', (nonFn) => {
    expect(isFunction(nonFn)).toBe(false);
  });
});
