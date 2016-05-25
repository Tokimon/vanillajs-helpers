import isString from './isString';
import isArray from './isArray';

export default function findByName(names) {
  // Is it is a string split by comma (convert to Array)
  if(isString(names)) { names = names.split(/[\s,]+/); }

  // 'names' has to be an Array at this point
  if(!isArray(names)) { return []; }

  try {
    if(names.length < 2) { return Array.from(document.getElementsByName(names[0])); }

    return names.reduce((arr, name) => {
      return !isString(name) ? arr : arr.concat(Array.from(document.getElementsByName(name)));
    }, []);
  } catch(ex) { return []; }
}
