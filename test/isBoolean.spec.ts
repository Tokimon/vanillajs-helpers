/* eslint-env node, mocha */
/* eslint-disable no-new-wrappers, no-unused-expressions */

import expect from './assets/chai';
import isBoolean from '../isBoolean';

describe('"isBoolean"', () => {
  it('Should return true for Boolean values', () => {
    expect(isBoolean(true)).to.be.true;
    expect(isBoolean(false)).to.be.true;
    expect(isBoolean(Boolean(1))).to.be.true;
    expect(isBoolean(Boolean(0))).to.be.true;
    expect(isBoolean(new Boolean(0))).to.be.true;
    expect(isBoolean(new Boolean(1))).to.be.true;
  });

  it('Should return false for non Boolean values', () => {
    expect(isBoolean('true')).to.be.false;
    expect(isBoolean('false')).to.be.false;
    expect(isBoolean(0)).to.be.false;
    expect(isBoolean(1)).to.be.false;
    expect(isBoolean(null)).to.be.false;
    expect(isBoolean(undefined)).to.be.false;
  });
});
