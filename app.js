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

function operation1(callback) {
  setTimeout(function () {
    console.log('Operation 1 completed');
    callback(null, 'Result of operation 1');
  }, 1000);
}

function operation2(result1, callback) {
  setTimeout(function () {
    console.log('Operation 2 completed with result: ' + result1);
    callback(null, 'Result of operation 2');
  }, 1000);
}

function operation3(result2, callback) {
  setTimeout(function () {
    console.log('Operation 3 completed with result: ' + result2);
    callback(null, 'Result of operation 3');
  }, 1000);
}

// Callback Hell
operation1(function (err, result1) {
  if (err) {
    console.error(err);
  } else {
    operation2(result1, function (err, result2) {
      if (err) {
        console.error(err);
      } else {
        operation3(result2, function (err, result3) {
          if (err) {
            console.error(err);
          } else {
            console.log('All operations completed successfully');
            console.log('Final result: ' + result3);
          }
        });
      }
    });
  }
});
