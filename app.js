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

function delayedGreeting() {
  setTimeout(() => {
    console.log('Hello, world!');
  }, 1000);
}

delayedGreeting();


function repeatedGreeting() {
  setInterval(() => {
    console.log('Hello, again!');
  }, 1000);
}

repeatedGreeting();


function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched');
    }, 2000);
  });
}

fetchData().then(data => console.log(data));


async function fetchDataAsync() {
  const data = await fetchData();
  console.log(data);
}

fetchDataAsync();

async function fetchFromApi() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}

fetchFromApi();

function fetchDataXMLHttpRequest() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.example.com/data', true);
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(JSON.parse(xhr.responseText));
    }
  };
  xhr.send();
}

fetchDataXMLHttpRequest();


function setupWebSocket() {
  const socket = new WebSocket('ws://example.com/socket');

  socket.onmessage = (event) => {
    console.log('Message from server', event.data);
  };
}

setupWebSocket();
