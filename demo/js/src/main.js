'use strict';

import $ from '../../../vjs/vjs';
import each from '../../../lib/iteration/each';
import find from '../../../lib/dom/traversing/find';
import isString from 'lodash/lang/isString';

$.initAction((selector) => { if( isString(selector) ) { return find(selector); }});



window.$ = $;