import phrasify, { PhrasifySettings } from '../phrasify';



type ResultCreator = (props: PhrasifySettings) => string;
type TestInput = [string, string | ResultCreator];



const emptyObj = {};

const spaceAround = (str: string, numbers?: boolean) => {
  return numbers ? ` ${str} ` : str;
};

const result = (val: string | ResultCreator, settings?: PhrasifySettings) =>
  typeof val === 'function'
    ? val(settings || {})
    : val;



const phrases: TestInput[] = [
  ['', () => ''],

  ['Multiple   spaces   in  phrase', 'Multiple spaces in phrase'],
  ['ABBR phrase', 'ABBR phrase'],
  ['ABBRInWord', 'ABBR In Word'],
  ['HTMLElement', 'HTML Element'],
  ['Num42in the middle', ({ numbers }) => `Num${spaceAround('42', numbers)}in the middle`],
  ['42in the beginning', ({ numbers }) => `${spaceAround('42', numbers).trimStart()}in the beginning`],
  ['42 alone', '42 alone'],
  ['word', 'word'],
  ['Name', 'Name'],
  ['/some/path/someWhere', 'some path some Where'],

  ['camelCase', () => 'camel Case'],
  ['PascalCase', () => 'Pascal Case'],
  ['snake_case', () => 'snake case'],
  ['kebab-case', () => 'kebab case'],
  ['-kebab-case-', () => 'kebab case'],

  ['word', () => 'word'],
  ['Name', () => 'Name'],

  ['data-ABBR42number space', ({ numbers }) => `data ABBR${spaceAround('42', numbers)}number space`],
  ['Look! 99 ? ABBR #Test', 'Look 99 ABBR Test']
];

describe('"phrasify"', () => {
  describe('Passing a string directly', () => {
    describe('Convert a phrase into a lower PascalCased word (using default settings)', () => {
      it.each(phrases)('"%s"', (input, output) => {
        expect(phrasify(input))
          .toBe(result(output));
      });
    });
  });

  describe('Passing a config object', () => {
    describe.each([
      emptyObj,
      { numbers: true },
      { numbers: false }
    ] as PhrasifySettings[])('%s', (conf) => {
      const phraser = phrasify(conf);

      it.each(phrases)('"%s"', (input, output) => {
        expect(phraser(input)).toBe(result(output, conf));
      });
    });
  });
});
