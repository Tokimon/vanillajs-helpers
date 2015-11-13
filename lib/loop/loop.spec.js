/* eslint-env node, mocha */

'use strict';

import loop from './loop';

const arr = ['a', 'b', 'c', 'd'],
  cb = sinon.spy(),
  cbBreak = sinon.stub();

cbBreak.onCall(1).returns(false);

describe('"loop" module:', function() {

  afterEach(() => {
    cb.reset();
    cbBreak.reset();
  });

  describe('loop.each', function() {
    it('should call the method for each entry in the array', function() {
      const len = loop.each(arr, cb);

      expect(arr.length).to.equal(len);
      expect(cb.callCount).to.equal(len);
      expect(cb.firstCall.calledWithExactly('a', 0, arr)).to.be.true;
    });

    it('should stop the loop if false is called', function() {
      const len = loop.each(arr, cbBreak);

      expect(arr.length).to.equal(len);
      expect(cbBreak.callCount).to.equal(2);
      expect(cbBreak.secondCall.calledWithExactly('b', 1, arr)).to.be.true;
    });
  });

  describe('loop.eachRev', function() {
    it('should call the method for each entry in the array in reversed order', function() {
      const len = loop.eachRev(arr, cb);

      expect(arr.length).to.equal(len);
      expect(cb.callCount).to.equal(len);
      expect(cb.firstCall.calledWithExactly('d', 3, arr)).to.be.true;
      expect(cb.getCall(3).calledWithExactly('a', 0, arr)).to.be.true;
    });

    it('should stop the reverse loop if false is called', function() {
      const len = loop.eachRev(arr, cbBreak);

      expect(arr.length).to.equal(len);
      expect(cbBreak.callCount).to.equal(2);
      expect(cbBreak.secondCall.calledWithExactly('c', 2, arr)).to.be.true;
    });
  });

  describe('loop.words', function() {
    const words = 'one two three four';
    const split = words.split(' ');

    it('should call the method for each word in a sentence', function() {
      const len = loop.words(words, cb);

      expect(split.length).to.equal(len);
      expect(cb.callCount).to.equal(4);
      expect(cb.firstCall.calledWithExactly('one', 0, split)).to.be.true;
    });

    it('should stop the words loop if false is called', function() {
      const len = loop.words(words, cbBreak);

      expect(split.length).to.equal(len);
      expect(cbBreak.callCount).to.equal(2);
      expect(cbBreak.secondCall.calledWithExactly('two', 1, split)).to.be.true;
    });
  });
});
