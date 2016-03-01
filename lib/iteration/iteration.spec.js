/* eslint-env node, mocha */

'use strict';

import * as loop from './iteration';

const arr = ['a', 'b', 'c', 'd'],
  cb = sinon.spy(),
  cbBreak = sinon.stub();

cbBreak.onCall(1).returns(false);

describe('"loop" module:', function() {

  afterEach(() => {
    cb.reset();
    cbBreak.reset();
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
