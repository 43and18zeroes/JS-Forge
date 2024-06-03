// It takes a couple a bit of time to log the result. The eventlistener can’t be fired until the loop is complete.
// Single-Threading in action: The eventlistener is blocked until the operations in the loop are done.

const button = document.querySelector('button');
const output = document.querySelector('p');

function startAdding() {
  let number = 0;
  setTimeout(() => {
    number++;
    console.log('First number: ', number);
    if (number === 1) {
      setTimeout(() => {
        number++;
        console.log('Second number: ', number);
      }, 1000);
    } else console.log("Second operation wasn't executed");
  }, 1000);
}

function operation1(number) {
  setTimeout(() => {
    number++;
    console.log('First number: ', number);
    return number;
  }, 1000);
}

function operation2(number) {
  setTimeout(() => {
    number++;
    console.log('Second number: ', number);
    return number;
  }, 1000);
}

function startSequence() {
  let number = 0;
  number = operation1(number);
  setTimeout(() => {
    operation2(number);
  }, 1500);
}

button.addEventListener('click', startSequence); // Callback Function

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);

const promise1 = Promise.resolve('resolved');
const promise2 = Promise.reject('rejected');

Promise.allSettled([promise1, promise2]).then(results => {
  results.forEach((result) => console.log(result.status));
});
// Ausgabe: 
// fulfilled
// rejected
