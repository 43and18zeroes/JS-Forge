const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Erfolgreich!');
  }, 1000);
});

myPromise.then(message => {
  console.log(message);
});