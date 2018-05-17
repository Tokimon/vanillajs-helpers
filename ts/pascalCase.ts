import isObject from './isObject';
import camelCase, { CamelCaseSettings, CamelCaseFunction } from './camelCase';



/**
 * Return a function that transforms a string into a PascalCased word
 * (eg. 'pascal case' -> 'PascalCase').
 *
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
export default function pascalCase(input?: CamelCaseSettings): CamelCaseFunction;

/**
 * Transform a string into a PascalCased word (eg. 'pascal case' -> 'PascalCase')
 *
 * ```ts
 * pascalCase('data-value2-input'); // -> DataValue2input
 * pascalCase('XML data input'); // -> XmlDataInput
 * ```
 *
 * @param input - The string to format
 * @return - The formatted string
 */
export default function pascalCase(input: string): string;

export default function pascalCase(input?: string | CamelCaseSettings): string | CamelCaseFunction {
  if (!input && input !== '') { input = {}; }

  return isObject(input)
    ? camelCase(Object.assign({}, input, { upper: true }))
    : (camelCase({ upper: true }) as Function)(input);
}
