import expect from './assets/chai';
import dashed from '../dashed';

describe('"dashed"', () => {
  it('Should transform a phrase into a dashed phrase', () => {
    expect(dashed('Convert PHRASE into Dashed')).toBe('convert-phrase-into-dashed');
    expect(dashed('ABBR phrase')).toBe('abbr-phrase');
    expect(dashed('HTMLElement')).toBe('html-element');
    expect(dashed('LOOK! 99 air balloons')).toBe('look-99-air-balloons');
    expect(dashed('bool2str')).toBe('bool2str');
    expect(dashed('camelCase')).toBe('camel-case');
    expect(dashed('snake_case')).toBe('snake-case');
    expect(dashed('data-value25input')).toBe('data-value25input');
    expect(dashed('/some/path/someWhere')).toBe('some-path-some-where');
  });

  it('Should add "-" around numbers', () => {
    expect(dashed('LOOK! 99 air balloons', { numbers: true })).toBe('look-99-air-balloons');
    expect(dashed('data-value25input', { numbers: true })).toBe('data-value-25-input');
  });
});
