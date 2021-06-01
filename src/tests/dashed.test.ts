import dashed from '../dashed';



describe('"dashed"', () => {
  it.each([
    ['Convert PHRASE into Dashed', 'convert-phrase-into-dashed'],
    ['ABBR phrase', 'abbr-phrase'],
    ['HTMLElement', 'html-element'],
    ['LOOK! 99 air balloons', 'look-99-air-balloons'],
    ['bool2str', 'bool2str'],
    ['camelCase', 'camel-case'],
    ['snake_case', 'snake-case'],
    ['data-value25input', 'data-value25input'],
    ['/some/path/someWhere', 'some-path-some-where']
  ])('Transforms a phrase into a dashed phrase: "%s"', (input, output) => {
    expect(dashed(input)).toBe(output);
  });

  it.each([
    ['LOOK! 99 air balloons', 'look-99-air-balloons'],
    ['data-value25input', 'data-value-25-input']
  ])('Adds as dash ("-") around numbers: "%s"', (input, output) => {
    expect(dashed(input, { numbers: true })).toBe(output);
  });
});
