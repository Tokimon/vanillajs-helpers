'use strict';

import isFunc from 'lodash/isFunction';
import isString from 'lodash/isString';
import on from '../event/on';

export const DEFAULT_CONFIG = {
  method: 'GET',
  csrf: false,
  csrfUrl: '/csrfToken',
  data: null
};

export default function request(url, config = {}) {
  return new Promise(function(resolve, reject) {
    try {
      const xhr = new XMLHttpRequest();

      config = _normalizeConfig(config);
      config.url = url;

      xhr.open(config.method.toUpperCase(), url);

      isFunc(config.configure) && config.configure(xhr, config);

      _addEvents(xhr, config).then(resolve, reject);

      xhr.send(config.data);
    } catch(err) { reject(`XHR Error: ${err}`); }
  });
}

function _respondedWithJSON(xhr) {
  if(xhr.responseType === 'json') { return true; }

  let contentType = xhr.getResponseHeader('Content-Type');
  if(!contentType) { return false; }

  return contentType.toLowerCase().includes('application/json');
}

function _normalizeConfig(config) {
  return Object.assign({}, DEFAULT_CONFIG, config);
}

function _addEvents(xhr, config) {
  if( isFunc(config.progress) ) {
    on(xhr.upload, 'progress', (e) => { config.progress(e); });
  }

  if( isFunc(config.readystatechange) ) {
    on(xhr, 'readystatechange', (e) => { config.readystatechange(e); });
  }

  return new Promise(function(resolve, reject) {
    on(xhr, 'load', e => {
      let res = xhr.responseText;

      if(_respondedWithJSON(xhr) && isString(res)) {
        try {
          res = JSON.parse(res);
        } catch(ex) {
          console.warn('Malformed JSON response:', res);
          console.warn('JSON parser exception:', ex);
          return reject(`Response sent as JSON but failed to parse response`);
        }
      }

      return xhr.status === 200 ? resolve(res) : reject(`Request failed with the status code: ${xhr.status}, and response: ${res}`);
    });

    on(xhr, 'error', () => { reject(`Connection error: ${xhr.responseText}`); });
  });
}
