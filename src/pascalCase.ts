import isObject from './isObject';
import camelCase, { CamelCaseSettings, CamelCaseFunction } from './camelCase';



export type PascalCaseSettings = Omit<CamelCaseSettings, 'upper'>;



/**
 * Return a function that transforms a string into a PascalCased word
 * (eg. 'pascal case' -> 'PascalCase').
 *
 * @example
 * ```ts
 * const caser = pascalCase({ abbr: true, numbers: true });
 *
 * caser('data-VALUE2-input'); // -> DataVALUE2Input
 * caser('XML data input'); // -> XMLDataInput
 * ```
 *
 * @param input - The settings for the returned format method
 * @return - The method to perform the formatting
 */
function pascalCase(input?: PascalCaseSettings): CamelCaseFunction;

/**
 * Transform a string into a PascalCased word (eg. 'pascal case' -> 'PascalCase')
 *
 * @example
 * ```ts
 * pascalCase('data-value2-input'); // -> DataValue2input
 * pascalCase('XML data input'); // -> XmlDataInput
 * ```
 *
 * @param input - The string to format
 * @return - The formatted string
 */
function pascalCase(input: string): string;

function pascalCase(input?: string | PascalCaseSettings): string | CamelCaseFunction {
  if (!input && input !== '') { input = {}; }

  return isObject(input)
    ? camelCase({ ...input, upper: true })
    : camelCase({ upper: true })(input as string);
}

export default pascalCase;
