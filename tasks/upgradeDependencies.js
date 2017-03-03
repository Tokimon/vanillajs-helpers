const fs = require('fs');
const cp = require('child_process');

fs.readFile('./package.json', function(err, data) {
  if(err) { throw err; }

  const pkgJson = JSON.parse(data);

  Object.keys(
    Object.assign(
      {},
      pkgJson['dependencies'],
      pkgJson['devDependencies']
    )
  )
    .forEach(function(dependency) {
      console.log('Upgrading ' + dependency);
      cp.exec('yarn upgrade ' + dependency);
    });
});
