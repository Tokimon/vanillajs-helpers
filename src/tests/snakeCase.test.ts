import expect from './assets/chai';
import snake from '../snakeCase';

describe('"snakeCase"', () => {
  it('Should transform a phrase into a snake_case phrase', () => {
    expect(snake('Convert PHRASE into Snake')).toBe('convert_phrase_into_snake');
    expect(snake('ABBR phrase')).toBe('abbr_phrase');
    expect(snake('HTMLElement')).toBe('html_element');
    expect(snake('LOOK! 99 air balloons')).toBe('look_99_air_balloons');
    expect(snake('camelCase')).toBe('camel_case');
    expect(snake('snake_case')).toBe('snake_case');
    expect(snake('data-value2input')).toBe('data_value2input');
    expect(snake('/some/path/someWhere')).toBe('some_path_some_where');
  });

  it('Should add "_" around numbers', () => {
    expect(snake('LOOK! 99 air balloons', { numbers: true })).toBe('look_99_air_balloons');
    expect(snake('data-value25input', { numbers: true })).toBe('data_value_25_input');
  });
});
