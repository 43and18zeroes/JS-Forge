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






// If-else-Anweisung
let time = 10;
if (time < 12) {
  console.log("Guten Morgen");
} else {
  console.log("Guten Abend");
}

// Switch-Anweisung
let day = "Montag";
switch (day) {
  case "Montag":
    console.log("Es ist Montag");
    break;
  case "Dienstag":
    console.log("Es ist Dienstag");
    break;
  default:
    console.log("Unbekannter Tag");
}

// For-Schleife
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While-Schleife
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}
