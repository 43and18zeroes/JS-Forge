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






// SetTimeout
setTimeout(() => {
  console.log("Diese Nachricht erscheint nach 2 Sekunden");
}, 2000);

// Promises
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Erfolg!");
  } else {
    reject("Fehler!");
  }
});

promise.then((message) => {
  console.log(message);
}).catch((error) => {
  console.error(error);
});

// Async/Await
async function fetchData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fehler beim Abrufen der Daten", error);
  }
}

fetchData();
