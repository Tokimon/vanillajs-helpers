/* eslint-env node, mocha */

import expect from './assets/chai';
import dashed from '../dashed';

describe('"dashed"', () => {
  it('Should transform a phrase into a dashed phrase', () => {
    expect(dashed('Convert PHRASE into Dashed')).to.equal('convert-phrase-into-dashed');
    expect(dashed('ABBR phrase')).to.equal('abbr-phrase');
    expect(dashed('HTMLElement')).to.equal('html-element');
    expect(dashed('LOOK! 99 air balloons')).to.equal('look-99-air-balloons');
    expect(dashed('bool2str')).to.equal('bool2str');
    expect(dashed('camelCase')).to.equal('camel-case');
    expect(dashed('snake_case')).to.equal('snake-case');
  });

  it('Should always turn inputs into strings', () => {
    expect(dashed(9)).to.equal('9');
    expect(dashed(null)).to.equal('null');
    expect(dashed()).to.equal('');
  });
});
