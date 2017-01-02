/* eslint-disable no-console */

const nPath = require('path');
const yargs = require('yargs');

const glob = require('glob-promise');
const Mocha = require('mocha');
const Istanbul = require('istanbul');

const roots = ['.', 'cjs', 'es5'];

const args = yargs
  .option('root', {
    alias: 'r',
    describe: 'Root path to search for the test directory',
    type: 'string',
    choices: roots,
    default: '.'
  })
  .option('test', {
    alias: 't',
    describe: 'Which tests to run',
    type: 'array'
  })
  .option('coverage', {
    alias: 'c',
    describe: 'Add coverage report',
    type: 'boolean'
  })
  .option('simple', {
    alias: 's',
    describe: 'Use a simple repoter',
    type: 'boolean'
  })
  .help()
  .alias('help', 'h')
  .argv;

const cover = args.root === roots[0] && args.coverage;

const tests = args.test && args.test.length
  ? (args.test.length === 1 ? args.test[0] : `@(${args.test.join('|')})`)
  : '*';

const babelConfig = {
  plugins: ['transform-strict-mode', 'transform-es2015-destructuring', 'transform-es2015-parameters']
};

if(args.root === roots[1]) {
  babelConfig.plugins.push(
    'transform-es2015-arrow-functions',
    'transform-es2015-block-scoped-functions',
    'transform-es2015-block-scoping',
    'transform-es2015-computed-properties',
    'transform-es2015-duplicate-keys',
    'transform-es2015-spread',
    'transform-es2015-template-literals',
    'transform-proto-to-assign',
    'transform-es2015-shorthand-properties'
  );
}

if(args.root === roots[0]) {
  babelConfig.plugins.push(['transform-es2015-modules-commonjs', { strict: false, loose: false }]);
}

if(cover) {
  babelConfig.plugins.push(['istanbul', { include: [`${tests}.js`] }]);
}

require('babel-register')(babelConfig);

const mochaConfig = {
  ui: 'bdd',
  reporter: args.simple ? 'progress' : 'spec'
};

const testFiles = nPath.resolve(args.root, `test/${tests}.spec.js`);

glob(testFiles)
  .then((files) => {
    console.log(`Running tests: (${nPath.relative(process.cwd(), testFiles)})`);
    console.log('-', files.map((file) => nPath.basename(file).replace('.spec.js', '')).join('\n- '));

    const test = new Mocha(mochaConfig);
    test.files = files;
    test.run((errors) => {
      if(cover) {
        const reporters = ['text', 'text-summary', 'lcov'];
        const opts = { dir: './coverage' };
        const collector = new Istanbul.Collector();
        collector.add(global.__coverage__ || {});

        reporters.forEach((reporter) => {
          Istanbul.Report
            .create(reporter, opts)
            .writeReport(collector, true);
        });
      }

      // exit with non-zero status if there were failures
      process.on('exit', () => process.exit(errors));
    });
  })
  .catch((err) => {
    console.error(err.message);
    console.error(err.stack);
  });
