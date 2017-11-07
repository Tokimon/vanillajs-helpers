import isObject from './isObject';
import isString from './isString';
import phrasify from './phrasify';



export interface CamelCaseSettings {
  upper?: boolean,
  abbr?: boolean,
  numbers?: boolean
}



const defaultSettings: CamelCaseSettings = {
  upper: false,
  abbr: false,
  numbers: true
};



function caser(opts: CamelCaseSettings, str?: string): string {
  const regex = opts.upper ? /(?:^|\s+)(.)/g : /\s+(.)/g;
  return (<Function> phrasify({ numbers: opts.numbers }))(str)
    .replace(/\s+(\S+)/g, (all: string, word: string) => {
      if(opts.abbr && /^[A-Z]+$/.test(word)) { return word; }
      return word[0].toUpperCase() + word.substr(1).toLowerCase();
    });
}



/**
 * Transform a phrase into a camelCased word (eg. 'camel case' -> 'camelCase')
 */
export default function camelCase(input?: string|CamelCaseSettings): string|Function {
  const opts = isObject(input) ? Object.assign(defaultSettings, input) : defaultSettings;

  return isString(input) ? caser(opts, input as string) : (str?: string) => caser(opts, str);
}
