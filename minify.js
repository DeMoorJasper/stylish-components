const {minify} = require('terser');
const glob = require('glob');
const path = require('path');
const fs = require('fs-extra');

async function globPromise(pattern, options) {
  return new Promise((resolve, reject) => {
    glob(pattern, options, (e, f) => {
      if (e) return reject(e);
      return resolve(f);
    });
  });
}

(async function() {
  const babelPath = path.join(process.cwd(), 'babel-dist')
  const files = await globPromise(path.join(babelPath, '/**/**.js'), {
    nodir: true
  });

  const libPath = path.join(process.cwd(), 'lib');
  for (let file of files) {
    let fileContent = (await fs.readFile(file)).toString();
    let filename = path.relative(babelPath, file);
    await fs.mkdirp(path.join(libPath, path.dirname(filename)));
    await fs.writeFile(path.join(libPath, filename), minify(fileContent, {
      mangle: {
        toplevel: true
      }
    }).code);
  }
})();