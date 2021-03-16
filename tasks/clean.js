const getFileNames = require('./getFileNames');
const { resolve } = require('path');
const fs = require('fs-extra');


getFileNames()
  .then((names) => Promise.all(
    names
      .reduce((all, name) => {
        all.push(
          fs.remove(resolve(name + '.js')),
          fs.remove(resolve(name + '.mjs')),
          fs.remove(resolve(name + '.cjs')),
          fs.remove(resolve(name + '.d.ts')),
          fs.remove(resolve('mjs')),
          fs.remove(resolve('cjs'))
        );

        return all;
      }, [])
  ));
