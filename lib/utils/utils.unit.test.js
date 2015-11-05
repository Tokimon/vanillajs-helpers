'use strict';

import utils from './utils';

describe('"UTILS" module', function() {
  describe('utils.randomId', function() {
    it('should generate a random id of designated length', function() {
      expect(utils.randomId().length).to.be.above(0);
      expect(utils.randomId(5).length).to.equal(5);
      expect(utils.randomId()).to.not.equal(utils.randomId());
    });
  });
});