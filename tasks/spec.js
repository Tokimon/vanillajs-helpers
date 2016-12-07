const nPath = require('path');

const fs = require('fs-promise');
const glob = require('glob-promise');
const babel = require('babel-core');

const args = require('yargs')
  .option('root', {
    alias: 'r',
    describe: 'Root path to search for the test directory',
    type: 'string',
    choices: ['.', 'cjs'],
    default: '.'
  })
  .help()
  .alias('help', 'h')
  .argv;

const babelConfig = {
  plugins: ['transform-strict-mode', 'transform-es2015-destructuring', 'transform-es2015-parameters']
};

if(args.root !== 'cjs') {
  babelConfig.plugins.push(['transform-es2015-modules-commonjs', { strict: false, loose: false }]);
}

fs.remove(nPath.join('specs', args.root))
  .then(() => glob(nPath.resolve(args.root, 'test/*.spec.js')))
  .then((files) =>
    Promise.all(
      files.map((file) =>
        fs.readFile(file)
          .then((code) =>
            fs.outputFile(
              nPath.resolve(`specs/${nPath.relative(process.cwd(), file.replace(/[\\/]test([\\/])/, '$1'))}`),
              babel.transform(code, babelConfig).code
            )
          )
          .then(() => process.stdout.write('.'))
      )
    )
  )
  .then(() => process.stdout.write('\nSPEC files successfully transpiled\n'))
  .catch((err) => {
    console.log('\n\n-----------');
    console.error(err.message);
    console.error(err.stack);
    console.log('-----------\n');
  });
