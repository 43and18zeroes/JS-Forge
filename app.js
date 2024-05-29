// It takes a couple a bit of time to log the result. The eventlistener can’t be fired until the loop is complete.
// Single-Threading in action: The eventlistener is blocked until the operations in the loop are done.

const button = document.querySelector('button');
const output = document.querySelector('p');

const setTimer = duraction => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done');
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
  setTimer(1000).then(() => {
    console.log('Timer done');
  });
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler); // Callback Function

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);

function operation1() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('Operation 1 completed');
      resolve('Result of operation 1');
    }, 1000);
  });
}

function operation2(result1) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('Operation 2 completed with result: ' + result1);
      resolve('Result of operation 2');
    }, 1000);
  });
}

function operation3(result2) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('Operation 3 completed with result: ' + result2);
      resolve('Result of operation 3');
    }, 1000);
  });
}

// Using Promises
operation1()
  .then(result1 => {
    return operation2(result1);
  })
  .then(result2 => {
    return operation3(result2);
  })
  .then(result3 => {
    console.log('All operations completed successfully');
    console.log('Final result: ' + result3);
  })
  .catch(err => {
    console.error(err);
  });
