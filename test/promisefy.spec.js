/* eslint-env node, mocha, browser */

import expect from './assets/chai';
import promisefy from '../promisefy';

describe('"promisefy"', () => {
  it('Should make the method return a promise', () => {
    const cb = (arg, cb) => {
      if(!arg) { return cb('error'); }
      return cb(null, 'success');
    };

    const promised = promisefy(cb);
    expect(promised).to.be.a('function');

    const success = promised();
    expect(success instanceof Promise).to.be.true;
    expect(success).not.to.be.rejected;

    const fail = promised(false);
    expect(fail instanceof Promise).to.be.true;
    expect(fail).to.be.rejected;
  });

  it('Should fail on non function arguments', () => {
    expect(promisefy()).to.fail;
    expect(promisefy(null)).to.fail;
    expect(promisefy('String')).to.fail;
    expect(promisefy(123)).to.fail;
    expect(promisefy({})).to.fail;
  });
});
