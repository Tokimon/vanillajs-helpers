import isString from './isString';
import isArray from './isArray';

export default function findByTagName(tags, elm) {
  // Is it is a string split by comma (convert to Array)
  if(isString(tags)) { tags = tags.split(/[\s,]+/); }

  // 'elm' has to be either a HTMLElement or 'document'
  // and clasNames has to be an Array
  if(!isArray(tags)) { return []; }

  if(!elm) { elm = document; }

  try {
    if(classNames.length < 2) { return Array.from(elm.getElementsByTagName(tags[0])); }

    return tags.reduce((arr, tag) => {
      return !isString(tag) ? arr : arr.concat(Array.from(elm.getElementsByName(tag)));
    }, []);
  } catch(ex) { return []; }
}
