function promisify(func) {
  return function(...args) {
      return new Promise((resolve, reject) => {
          func(...args, (err, result) => {
              if (err) return reject(err);
              resolve(result);
          });
      });
  };
}
const fs = require('fs');
const readFile = promisify(fs.readFile);
readFile('file.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));