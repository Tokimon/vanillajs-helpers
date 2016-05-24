import isString from './isString';
import isArray from './isArray';

export default function findByName(names) {
  // Is it is a string split by comma (convert to Array)
  if(isString(names)) { names = names.split(/[\s,]+/); }

  // 'elm' has to be either a HTMLElement or 'document'
  // and clasNames has to be an Array
  if(!isArray(names)) { return []; }

  return names.reduce((arr, name) => {
    return arr.concat(name ? Array.from(document.getElementsByName(name)) : []);
  }, []);
}
