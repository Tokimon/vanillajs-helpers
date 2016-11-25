const nPath = require('path');
const fs = require('fs-promise');
const glob = require('glob-promise');
const babel = require('babel-core');

const babelConfig = {
  plugins: [['transform-es2015-modules-commonjs', { strict: true, loose: false }]]
};

glob('./*.js')
  .then((files) =>
    Promise.all(
      files.map((file) =>
        fs.readFile(file)
          .then((code) =>
            fs.outputFile(
              nPath.resolve(`cjs/${nPath.basename(file)}`),
              babel.transform(code, babelConfig).code
            )
          )
          .then(() => process.stdout.write('.'))
      )
    )
  )
  .then(() => { console.log('\nAll Done'); })
  .catch((err) => {
    console.error(err.messsage);
    console.error(err.stack);
  });