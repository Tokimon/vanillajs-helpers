import camelCase, { CamelCaseSettings, defaultSettings } from '../camelCase';



type ResultCreator = (props: CamelCaseSettings) => string;
type TestInput = [string, ResultCreator];



const emptyObj = {};
const settingsKeys = Object.keys(defaultSettings) as (keyof CamelCaseSettings)[];



function createSettings(keys: (keyof CamelCaseSettings)[], prev: CamelCaseSettings = {}): CamelCaseSettings[] {
  const x: CamelCaseSettings[] = [];

  // eslint-disable-next-line no-unmodified-loop-condition
  while (keys) {
    const key = keys.pop();
    if (!key) { break; }

    const _true = { ...prev, [key]: true };
    const _false = { ...prev, [key]: false };

    x.push(
      _true,
      _false,
      ...createSettings([...keys], _true),
      ...createSettings([...keys], _false)
    );
  }

  return x;
}



const firstUpper = (str: string) => str && (str[0].toUpperCase() + str.slice(1));
const afterNum = (str: string, numbers?: boolean) => {
  str = str.toLowerCase();
  return numbers ? firstUpper(str) : str;
};

const abbrev = (abbr?: boolean, inBeginning?: true) => {
  let str = 'ABBR';
  if (abbr) { return str; }

  str = str.toLowerCase();
  return inBeginning ? str : firstUpper(str);
};



const phrases: TestInput[] = [
  ['', () => ''],

  ['With ABBR in the middle', ({ abbr }) => `with${abbrev(abbr)}InTheMiddle`],
  ['ABBR in the beginning', ({ abbr }) => `${abbrev(abbr, true)}InTheBeginning`],
  ['ABBRInWord', ({ abbr }) => `${abbrev(abbr, true)}InWord`],

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



describe('"camelCase"', () => {
  describe.skip('Passing a string directly', () => {
    describe('Convert a phrase into a lower camelCased word (using default settings)', () => {
      it.each(phrases)('"%s"', (input, output) => {
        expect(camelCase(input)).toBe(output(defaultSettings));
      });
    });
  });

  describe('Passing a config object', () => {
    describe.each([
      emptyObj,
      ...createSettings(settingsKeys)
    ] as CamelCaseSettings[])('%s', (conf) => {
      const caser = camelCase(conf);
      const settings = emptyObj === conf ? defaultSettings : conf;

      it.each(phrases)('"%s"', (input, output) => {
        let out = output(settings);
        if (conf.upper) { out = firstUpper(out); }

        expect(caser(input)).toBe(out);
      });
    });
  });
});
