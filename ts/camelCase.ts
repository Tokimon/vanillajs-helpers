import isObject from './isObject';
import phrasify, { PhrasifySettings } from './phrasify';



export interface CamelCaseSettings extends PhrasifySettings {
  upper?: boolean;
  abbr?: boolean;
}

export type CamelCaseFunction = (str: string) => string;



const defaultSettings: CamelCaseSettings = {
  upper: false,
  abbr: false,
  numbers: true
};


/**
 * Transform a string into a camelCased word (eg. 'camel case' -> 'camelCase')
 *
 * ```ts
 * caser('data-value2-input'); // -> dataValue2input
 * ```
 *
 * @param settings - The settings for the string formatting
 * @param str - The string to format
 * @return - The formatted string
 */
function caser(settings: CamelCaseSettings, str: string): string {
  const { upper, abbr, numbers } = settings;

  return phrasify({ numbers })(str)
    .replace(/(?:^|\s+)(\w+)/g, (all: string, word: string, index: number) => {
      if (abbr && /^[A-Z]+$/.test(word)) { return word; }
      if (index === 0 && !upper) { return word.toLowerCase(); }
      return word[0].toUpperCase() + word.substr(1).toLowerCase();
    });
}



/**
 * Return a function that transforms a string into a camelCased word
 * (eg. 'camel case' -> 'camelCase').
 *
 * ```ts
 * const caser = camelCase({ abbr: true, numbers: true, upper: true });
 *
 * caser('data-VALUE2-input'); // -> DataVALUE2Input
 * caser('XML data input'); // -> XMLDataInput
 * ```
 *
 * @param input - The settings for the returned format method
 * @return - The method to perform the formatting
 */
export default function camelCase(input?: CamelCaseSettings): CamelCaseFunction;

/**
 * Transform a string into a camelCased word (eg. 'camel case' -> 'camelCase')
 *
 * ```ts
 * camelCase('data-value2-input'); // -> dataValue2input
 * camelCase('XML data input'); // -> XmlDataInput
 * ```
 *
 * The Ruels of the camel casing can be changed by giving it an object
 *
 * ```ts
 * const camelCaseKeepAbbr = camelCase({ abbr: true });
 * camelCaseKeepAbbr('XML data input'); // -> XMLDataInput
 * ```
 *
 * @param input - The string to format
 * @return - The formatted string
 */
export default function camelCase(input: string): string;

export default function camelCase(input?: string | CamelCaseSettings): string | CamelCaseFunction {
  if (!isObject(input)) {
    return caser(defaultSettings, input as string || '');
  }

  const opts = Object.assign({}, defaultSettings, input);
  return (str: string) => caser(opts, str);
}
