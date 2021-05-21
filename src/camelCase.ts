import isString from './isString';
import phrasify, { PhrasifySettings } from './phrasify';



export interface CamelCaseSettings extends PhrasifySettings {
  upper?: boolean;
  abbr?: boolean;
}

export type CamelCaseFunction = (str: string) => string;



export const defaultSettings: CamelCaseSettings = {
  upper: false,
  abbr: false,
  numbers: true
};


/**
 * Transform a string into a camelCased word (eg. 'camel case' -> 'camelCase')
 *
 * @example
 * ```ts
 * caser('data-value2-input'); // -> dataValue2Input
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
      if (index === 0 && !upper) { return abbr ? word : word.toLowerCase(); }

      const restOfWord = word.substr(1);
      return word[0].toUpperCase() + (abbr ? restOfWord : restOfWord.toLowerCase());
    });
}



/**
 * Return a function that transforms a string into a camelCased word
 * (eg. 'camel case' -> 'camelCase').
 *
 * @example
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
function camelCase(input: CamelCaseSettings): CamelCaseFunction;



/**
 * Transform a string into a camelCased word (eg. 'camel case' -> 'camelCase')
 *
 * @example
 * ```ts
 * camelCase('data-value2-input'); // -> dataValue2input
 * camelCase('XML data input'); // -> XmlDataInput
 * ```
 *
 * @param input - The string to format
 * @return - The formatted string
 */
function camelCase(input: string): string;



function camelCase(input: string | CamelCaseSettings): string | CamelCaseFunction {
  if (isString(input)) {
    return caser(defaultSettings, input as string);
  }

  const opts = Object.assign({}, defaultSettings, input);
  return (str: string) => caser(opts, str);
}

export default camelCase;
