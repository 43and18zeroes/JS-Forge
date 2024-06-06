let p = new Promise((resolve, reject) => {
  let a = 1 + 2; // Change
  if (a == 2) {
    resolve('Success');
  } else {
    reject('Failed');
  }
});

p.then(message => {
  console.log('This is in the then ' + message); // This is in the catch Failed
}).catch(message => {
  console.log('This is in the catch ' + message);
});