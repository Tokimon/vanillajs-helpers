/* eslint-env node, mocha */

import expect from './assets/chai';
import snake from '../snakeCase';

describe('"snakeCase"', () => {
  it('Should transform a phrase into a snake_case phrase', () => {
    expect(snake('Convert PHRASE into Snake')).to.equal('convert_phrase_into_snake');
    expect(snake('ABBR phrase')).to.equal('abbr_phrase');
    expect(snake('HTMLElement')).to.equal('html_element');
    expect(snake('LOOK! 99 air balloons')).to.equal('look_99_air_balloons');
    expect(snake('camelCase')).to.equal('camel_case');
    expect(snake('snake_case')).to.equal('snake_case');
    expect(snake('data-value2input')).to.equal('data_value2input');
    expect(snake('/some/path/someWhere')).to.equal('some_path_some_where');
  });

  it('Should add "_" around numbers', () => {
    expect(snake('LOOK! 99 air balloons', true)).to.equal('look_99_air_balloons');
    expect(snake('data-value25input', true)).to.equal('data_value_25_input');
  });

  it('Should always turn inputs into strings', () => {
    expect(snake(undefined)).to.equal('');
    expect(snake(null)).to.equal('');
  });
});
