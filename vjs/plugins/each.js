'use strict';

import $ from '../vjs';
import each from '../../lib/iteration/each';

$.plugin('each', function(cb) {
  each(this, (item, index) => { cb.call($(item), item, index); });
  return this;
});
