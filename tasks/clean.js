const glob = require('globby');
const fs = require('fs-extra');
const nPath = require('path');

glob('./*.ts')
  .then((files) => {
    const fileNames = files.map((file) => nPath.basename(file, '.ts'));
    return glob([`./@(${fileNames.join('|')}).js`, `./!(node_modules)/@(${fileNames.join('|')})?(.spec).js?(.map)`]);
  })
  .then((files) => Promise.all(files.map((file) => fs.remove(file))))
  .then(() => console.log('done'));
