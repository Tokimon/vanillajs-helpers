/* eslint-env node, mocha */

import expect from './assets/chai';
import pascalCase from '../pascalCase';

describe('"pascalCase"', () => {
  it('Should convert a phrase into a PascalCased word', () => {
    expect(pascalCase('Convert PHRASE into Pascal case')).to.equal('ConvertPhraseIntoPascalCase');
    expect(pascalCase('ABBR phrase')).to.equal('AbbrPhrase');
    expect(pascalCase('HTMLElement')).to.equal('HtmlElement');
    expect(pascalCase('LOOK! 99 air balloons')).to.equal('Look99AirBalloons');
    expect(pascalCase('camelCase')).to.equal('CamelCase');
    expect(pascalCase('PascalCase')).to.equal('PascalCase');
    expect(pascalCase('snake_case')).to.equal('SnakeCase');
  });

  it('Should always turn inputs into strings', () => {
    expect(pascalCase(9)).to.equal('9');
    expect(pascalCase(null)).to.equal('Null');
    expect(pascalCase()).to.equal('');
  });
});
