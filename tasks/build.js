const { rmdir, rename } = require('fs').promises;
const { resolve } = require('path');
const exec = require('util').promisify(require('child_process').exec);

const getFileNames = require('./getFileNames');


async function start() {
  console.log('Building files...');

  await Promise.all([
    exec('npx tsc -p ./tsconfig.json'),
    exec('npx tsc -p ./tsconfig.mjs.json'),
    exec('npx tsc -p ./tsconfig.cjs.json')
  ]);

  console.log('Build done, cleaning up...');

  const names = await getFileNames();

  await Promise.all(
    names.reduce((all, name) => {
      const jsFile = name + '.js';

      all.push(
        rename(resolve('mjs', jsFile), resolve(name + '.mjs')),
        rename(resolve('cjs', jsFile), resolve(name + '.cjs'))
      );

      return all;
    }, [])
  );

  await Promise.all([
    rmdir(resolve('mjs')),
    rmdir(resolve('cjs'))
  ]);

  console.log('All done!');
}

start();
