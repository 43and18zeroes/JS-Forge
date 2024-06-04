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

// Funktionserklärung
function greet(name) {
  return 'Hello, ' + name + '!';
}

// Funktionsaufruf
console.log(greet('Alice'));

// Anonyme Funktion
let square = function (x) {
  return x * x;
};

console.log(square(5));

// Pfeilfunktion
let add = (a, b) => a + b;

console.log(add(3, 4));
