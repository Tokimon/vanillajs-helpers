/* eslint-env node, mocha, browser */
/* global expect, $ */

import randomId from 'vanillajs-helpers/randomId';

describe('"randomId"', () => {
  it('Should generate a random id of default length', () => {
    expect(/[a-z0-9]{10}/.test(randomId())).to.be.true;
  });

  it('Should generate a random id of specific length', () => {
    expect(/[a-z0-9]{100}/.test(randomId(100))).to.be.true;
  });
});
