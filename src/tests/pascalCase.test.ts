import createBooleanSettings from './assets/createBooleanSettings';
import firstUpper from './assets/firstUpper';

import { defaultSettings } from '../camelCase';
import pascalCase, { PascalCaseSettings } from '../pascalCase';



type ResultCreator = (props: PascalCaseSettings) => string;
type TestInput = [string, ResultCreator];



const emptyObj = {};

const defaultPascalSettings = { ...defaultSettings };
delete defaultPascalSettings.upper;

const settingsKeys = Object.keys(defaultSettings) as (keyof PascalCaseSettings)[];



const afterNum = (str: string, numbers?: boolean) => {
  str = str.toLowerCase();
  return numbers ? firstUpper(str) : str;
};

const abbrev = (abbr?: boolean) => {
  const str = 'ABBR';
  return abbr ? str : firstUpper(str.toLowerCase());
};



const phrases: TestInput[] = [
  ['', () => ''],

  ['With ABBR in the middle', ({ abbr }) => `with${abbrev(abbr)}InTheMiddle`],
  ['ABBR in the beginning', ({ abbr }) => `${abbrev(abbr)}InTheBeginning`],
  ['ABBRInWord', ({ abbr }) => `${abbrev(abbr)}InWord`],

  ['Num42in the middle', ({ numbers = true }) => `num42${afterNum('in', numbers)}TheMiddle`],
  ['42in the beginning', ({ numbers = true }) => `42${afterNum('in', numbers)}TheBeginning`],
  ['42 alone', () => '42Alone'],

  ['camelCase', () => 'camelCase'],
  ['PascalCase', () => 'pascalCase'],
  ['snake_case', () => 'snakeCase'],
  ['kebab-case', () => 'kebabCase'],
  ['-kebab-case-', () => 'kebabCase'],

  ['word', () => 'word'],
  ['Name', () => 'name'],

  ['data-ABBR42number space', ({ numbers = true, abbr }) => `data${abbrev(abbr)}42${afterNum('number', numbers)}Space`],
  ['Look! 99 ? ABBR #Test', ({ abbr }) => `look99${abbrev(abbr)}Test`]
];



describe('"pascalCase"', () => {
  describe('Passing a string directly', () => {
    describe('Convert a phrase into a lower PascalCased word (using default settings)', () => {
      it.each(phrases)('"%s"', (input, output) => {
        expect(pascalCase(input))
          .toBe(firstUpper(output(defaultSettings)));
      });
    });
  });

  describe('Passing a config object', () => {
    describe.each([
      emptyObj,
      ...createBooleanSettings<PascalCaseSettings>(settingsKeys)
    ] as PascalCaseSettings[])('%s', (conf) => {
      const caser = pascalCase(conf);
      const settings = emptyObj === conf ? defaultPascalSettings : conf;

      it.each(phrases)('"%s"', (input, output) => {
        const out = firstUpper(output(settings));
        expect(caser(input)).toBe(out);
      });
    });
  });
});
