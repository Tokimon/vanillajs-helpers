const nPath = require('path');
const yargs = require('yargs');

const glob = require('glob-promise');
const Mocha = require('mocha');
const Istanbul = require('istanbul');

const args = yargs
  .option('test', {
    alias: 't',
    describe: 'Which tests to run',
    type: 'array'
  })
  .help()
  .alias('help', 'h')
  .argv;

const tests = args.test && args.test.length
  ? (args.test.length === 1 ? args.test[0] : `@(${args.test.join('|')})`)
  : '*';

require('babel-register')({
  presets: ['node5'],
  plugins: [['istanbul', { include: [`${tests}.js`] }]]
});

const mochaConfig = {
  ui: 'bdd',
  reporter: 'spec'
};

glob(nPath.resolve(`test/${tests}.spec.js`))
  .then((files) => {
    console.log(`Running tests: (test/${tests}.spec.js)`);
    console.log('-', files.map((file) => nPath.basename(file).replace('.spec.js', '')).join('\n- '));

    const test = new Mocha(mochaConfig);
    test.files = files;
    test.run((errors) => {
      const reporters = ['text', 'text-summary', 'lcov'];
      const opts = { dir: './coverage' };
      const collector = new Istanbul.Collector();
      collector.add(global.__coverage__ || {});

      reporters.forEach((reporter) => {
        Istanbul.Report
          .create(reporter, opts)
          .writeReport(collector, true);
      });

      // exit with non-zero status if there were failures
      process.on('exit', () => process.exit(errors));
    });
  })
  .catch((err) => {
    console.error(err.message);
    console.error(err.stack);
  });
