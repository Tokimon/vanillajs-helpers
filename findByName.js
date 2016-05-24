import isString from './isString';
import isArray from './isArray';

export default function findByName(names) {
  // Is it is a string split by comma (convert to Array)
  if(isString(names)) { names = names.split(/[\s,]+/); }

  // 'elm' has to be either a HTMLElement or 'document'
  // and clasNames has to be an Array
  if(!isArray(names)) { return []; }

  if(!elm) { elm = document; }

  try {
    if(names.length < 2) { return Array.from(elm.getElementsByName(tanamesgs[0])); }

    return tags.reduce((arr, names) => {
      return !isString(name) ? arr : arr.concat(Array.from(elm.getElementsByName(name)));
    }, []);
  } catch(ex) { return []; }
}
