// synchronous

// Asynchronous

console.log(' 1 ');

setTimeout(() => {
  console.log(' 5 ');
}, 1000);

console.log(' 2 ');
console.log(' 3 ');
console.log(' 4 ');

function greet(name) {
  console.log('Hello, ' + name + '!');
}

function processUserInput(nameOfMyCallbackFunction) {
  const name = 'Example Name';
  nameOfMyCallbackFunction(name);
}

// Here we pass the greet function as a callback to processUserInput
processUserInput(greet);
