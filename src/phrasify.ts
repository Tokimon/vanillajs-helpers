import isObject from './isObject';
import isString from './isString';



export interface PhrasifySettings {
  numbers?: boolean;
}

export type PhrasifyFunction = (str: string) => string;



const defaultSettings: PhrasifySettings = { numbers: false };



/**
 * Transform a string into a space separated phrase
 *
 * @example
 * ```ts
 * seperateWords('dataValue2-input'); // -> data Value2 input
 * ```
 *
 * @param settings - The settings for the word separation
 * @param str - The string to transform
 * @return - The transformed string
 */
function seperateWords(settings: PhrasifySettings, str: string): string {
  if (!str) { return ''; }

  // Create space before uppercase letters (if it is an abbrivaition
  // - more than 1 letter - create space after as well)
  str = `${str}`.replace(/([A-Z])([a-z])/g, (m) => ` ${m}`);
  if (settings.numbers) { str = str.replace(/(\d+)/g, ' $1 '); }

  // Convert any non letter/number characters into a single space
  // and remove trailing spaces
  return str.replace(/[^a-z\d]+/gi, ' ').trim();
}



/**
 * Return a function that transform a string into a space separated phrase
 *
 * @example
 * ```ts
 * const phraser = phrasify({ numbers: true });
 *
 * phraser('dataVALUE2-input'); // -> data VALUE 2 input
 * phraser('XMLDataInput'); // -> XML data input
 * ```
 *
 * @param input - The settings for the returned transform method
 * @return - The method to perform the transform
 */
function phrasify(input?: PhrasifySettings): PhrasifyFunction;

/**
 * Transform a string into a space separated phrase
 *
 * @example
 * ```ts
 * phrasify('dataVALUE2-input'); // -> data VALUE2 input
 * phrasify('XMLDataInput'); // -> XML data input
 * ```
 *
 * @param input - The string to transform
 * @return - The transformed phrase or word
 */
function phrasify(input: string): string;

function phrasify(input?: string | PhrasifySettings): string | PhrasifyFunction {
  const settings = isObject(input)
    ? Object.assign({}, defaultSettings, input)
    : defaultSettings;

  return isString(input)
    ? seperateWords(settings, input as string)
    : (str) => seperateWords(settings, str);
}

export default phrasify;
