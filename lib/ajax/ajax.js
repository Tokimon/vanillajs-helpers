'use strict';

import { isString } from '../is/is';
import { on } from '../event/event';

const DEFAULT_CONFIG = {
  method: 'GET',
  csrf: false,
  csrfUrl: '/csrfToken',
  data: null
};

export function request(url, config = {}) {
  return new Promise(function(resolve, reject) {
    try {
      const xhr = new XMLHttpRequest();

      config = _config(config);
      config.url = url;

      xhr.open(config.method.toUpperCase(), url);

      _addEvents(xhr, config).then(resolve, reject);

      if(!config.csrf) {
        xhr.send(config.data);
      } else {
        _addCsrf(xhr, config)
            .then(
                csrf => { xhr.send(config.data); },
                err => { reject(`Error adding csrf token - Canceling request: ${err}`); }
        );
      }
    } catch(err) { reject(`XHR Error: ${err}`); }
  });
}

export function post(url, config = {}) {
  if(!config.data) { config = { data: config }; }

  config.method = 'POST';
  return request(url, config);
}

export function put(url, config = {}) {
  if(!config.data) { config = { data: config }; }

  config.method = 'PUT';
  return request(url, config);
}

export function del(url, config = {}) {
  if(!config.data) { config = { data: config }; }

  config.method = 'DELETE';
  return request(url, config);
}

export function get(url, config = {}) {
  config.method = 'GET';
  return request(url, config);
}

export function getCSRF(config = {}) {
  const csrfConfig = _config(config);
  // Enforce csrf false, otherwise we will run into a call loop
  csrfConfig.csrf = false;

  return get(csrfConfig.csrfUrl, csrfConfig).then((csrf) => {
    config.csrf = isString(csrf) ? csrf : csrf._csrf;
    return config.csrf;
  });
}

function _respondedWithJSON(xhr) {
  if(xhr.responseType === 'json') { return true; }

  let contentType = xhr.getResponseHeader('Content-Type');
  if(!contentType) { return false; }

  return contentType.toLowerCase().includes('application/json');
}

function _config(config) {
  return Object.assign({}, DEFAULT_CONFIG, config);
}

function _addCsrf(xhr, config) {
  const prom = new Promise(function(resolve, reject) {
    if(config.csrf === false) { return resolve(); }
    return isString(config.csrf) ? resolve(config.csrf) : getCSRF(config).then(resolve, reject);
  });

  return config.csrf !== false ? prom.then(_initCsrf.bind(null, xhr)) : prom;
}

function _addEvents(xhr, config) {
  if(config.progress) {
    on(xhr.upload, 'progress', (e) => { config.progress(e); });
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

function _initCsrf(xhr, csrf) {
  xhr.withCredentials = true;
  xhr.setRequestHeader('x-csrf-token', csrf);
  return csrf;
}
