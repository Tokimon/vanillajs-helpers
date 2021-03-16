const { readdir } = require('fs').promises;
const { resolve, extname, basename } = require('path');


module.exports = async () => {
  const files = await readdir(resolve('src'), { withFileTypes: true });

  return files
    .filter((file) => file.isFile() && extname(file.name) === '.ts')
    .map(({ name }) => basename(name, '.ts'));
};
