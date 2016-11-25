/* eslint-env node, mocha, browser */
/* global expect, $ */

import snake from 'vanillajs-helpers/snakeCase';

describe('"snakeCase"', () => {
  it('Should transform a phrase into a snake_case phrase', () => {
    expect(snake('Convert PHRASE into Snake')).to.equal('convert_phrase_into_snake');
    expect(snake('ABBR phrase')).to.equal('abbr_phrase');
    expect(snake('HTMLElement')).to.equal('html_element');
    expect(snake('LOOK! 99 air balloons')).to.equal('look_99_air_balloons');
    expect(snake('camelCase')).to.equal('camel_case');
    expect(snake('snake_case')).to.equal('snake_case');
  });

  it('Should always turn inputs into strings', () => {
    expect(snake(9)).to.equal('9');
    expect(snake(null)).to.equal('null');
    expect(snake()).to.equal('');
  });
});
