'use strict';

import each from 'lodash/each';

export default function words(sentence, cb) {
  return each(sentence.split(' '), cb);
}
