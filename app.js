const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = opts => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      success => {
        resolve(success);
      },
      error => {},
      opts
    );
  });
  return promise;
};

const setTimer = duraction => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duraction);
  });
  return promise;
};

function trackUserHandler() {
  let positionData;
  getPosition()
    .then(posData => {
      positionData = posData;
      return setTimer(2000);
    })
    .then(data => {
      console.log(data, positionData);
    });
  setTimer(1000).then(() => {
    console.log('Time done!');
  });
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// Advanced functions

// fibonacciGenerator.js
function* fibonacciGenerator() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// Example usage:
const gen = fibonacciGenerator();
console.log([...Array(10)].map(() => gen.next().value)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]