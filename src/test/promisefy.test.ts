/* eslint-disable no-unused-expressions */

import expect from './assets/chai';
import promisefy, { NodeLikeCallback } from '../promisefy';

describe('"promisefy"', () => {
  it('Should make the method return a promise', () => {
    const err = new Error('error');
    const callback = (ok: boolean, cb: NodeLikeCallback) =>
      ok
        ? cb(null, 'success')
        : cb(err);

    const promised = promisefy(callback);
    expect(promised).to.be.a('function');

    const success = promised(true);
    expect(success instanceof Promise).to.be.true;

    const fail = promised(false);
    expect(fail instanceof Promise).to.be.true;

    return Promise.all([
      expect(success).to.not.be.rejected,
      expect(fail).to.be.rejected
    ]);
  });
});
