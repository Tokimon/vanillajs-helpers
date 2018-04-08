import isObject from './isObject';
import isString from './isString';
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
 * @param input - The string to format
 * @return - The formatted string
 */
export default function camelCase(input: string): string;

export default function camelCase(input?: string | CamelCaseSettings): string | CamelCaseFunction {
  const opts = isObject(input) ? Object.assign({}, defaultSettings, input) : defaultSettings;
  return isString(input) ? caser(opts, input as string) : (str: string) => caser(opts, str);
}
