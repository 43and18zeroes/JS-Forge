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

promise.then(value => {
  console.log(value); // "Success!"
});

async function fetchData() {
  let response = await fetch('https://api.example.com/data');
  let data = await response.json();
  console.log(data);
}

fetchData();

async function fetchData() {
  let response = await fetch('https://api.example.com/data');
  let data = await response.json();
  console.log(data);
}

fetchData();

fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();



setImmediate(() => {
  console.log('Executed in the next iteration of the event loop');
});
