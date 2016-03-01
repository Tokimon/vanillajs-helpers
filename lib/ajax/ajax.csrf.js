'use strict';

import DEFAULT_CONFIG from './ajax.request';
import { get } from './ajax.rest';
import isString from 'lodash/isString';
import isFunc from 'lodash/isFunction';

export const CSRF_DEFAULT_CONFIG = Object.assign({}, DEFAULT_CONFIG, {
  csrfUrl: '/csrfToken'
});

export default function csrf_request( url, config = {} ) {
  return _requireCsrf(config)
      .then(() => { return get(url, _configureXhrCsrf(config)); });
}

export function getCrsfToken( config = {} ) {
  const csrfConfig = _normalizeConfig(config);

  return get(csrfConfig.csrfUrl, csrfConfig)
      .then((csrf) => {
        config.csrf = isString(csrf) ? csrf : csrf._csrf;
        return config;
      })
      .catch((err) => { throw new Error(`Error getting csrf token: ${err}`); });
}

export function csrf_get( url, config = {} ) {
  config.method = 'GET';
  return csrf_request(url, config);
}

export function csrf_post( url, config = {} ) {
  config.method = 'GET';
  return csrf_request(url, config);
}

export function csrf_put( url, config = {} ) {
  config.method = 'GET';
  return csrf_request(url, config);
}

export function csrf_del( url, config = {} ) {
  config.method = 'GET';
  return csrf_request(url, config);
}



function _normalizeConfig( config ) {
  return Object.assign({}, CSRF_DEFAULT_CONFIG, config);
}

function _configureXhrCsrf( config ) {
  const orgConfigure = config.configure;

  config.configure = (xhr, config) => {
    isFunc(orgConfigure) && orgConfigure(xhr, config);
    xhr.withCredentials = true;
    xhr.setRequestHeader('x-csrf-token', config.csrf);
  };

  return config;
}

function _requireCsrf( config ) {
  return new Promise((resolve, reject) => {
    if( isString(config.csrf) ) { return resolve(config); }
    return getCrsfToken(config).then(resolve, reject);
  });
}
