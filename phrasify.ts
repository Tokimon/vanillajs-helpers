import isObject from './isObject';
import isString from './isString';



export interface PhrasifySettings {
  numbers?: boolean;
}



const defaultSettings: PhrasifySettings = { numbers: false };



function seperateWords(opts: PhrasifySettings, str: string): string {
  if (!str) { return ''; }

  // Create space before uppercase letters (if it is an abbrivaition
  // - more than 1 letter - create space after as well)
  str = `${str}`.replace(/([A-Z])([a-z])/g, (m) => ` ${m}`);
  if (opts.numbers) { str = str.replace(/(\d+)/g, ' $1 '); }

  // Convert any non letter/number characters into a single space
  // and remove trailing spaces
  return str.replace(/[^a-z\d]+/gi, ' ').trim();
}



/**
 * Transform phrase into a space separated phrase
 */
export default function phrasify(input?: PhrasifySettings): Function;
export default function phrasify(input: string): string;
export default function phrasify(input?: string | PhrasifySettings): string | Function {
  const opts = isObject(input) ? Object.assign({}, defaultSettings, input) : defaultSettings;

  return isString(input)
    ? seperateWords(opts, input as string)
    : (str: string): string => seperateWords(opts, str);
}
