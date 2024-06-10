const button = document.querySelector('button');
const output = document.querySelector('p');

const setTimer = duraction => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duraction);
  });
  return promise;
};

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    posData => {
      setTimer(2000).then(data => {
        console.log(data, posData);
      });
    },
    error => {
      console.log(error);
    }
  );
  setTimeout(() => {
    console.log('Time done!');
  }, 0);
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

setTimeout(() => {
  console.log('Executed after 2 seconds');
}, 2000);



setInterval(() => {
  console.log('Executed every 2 seconds');
}, 2000);


let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 2000);
});

promise.then((value) => {
  console.log(value); // "Success!"
});
