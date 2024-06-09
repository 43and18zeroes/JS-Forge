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
  console.log('Executed every 1 second');
}, 1000);


fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved!');
    }, 1000);
  });
  
  promise.then(result => console.log(result));
  

  async function fetchData() {
    try {
      let response = await fetch('https://api.example.com/data');
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchData();
  

  let socket = new WebSocket('ws://example.com/socket');

socket.onopen = function(event) {
  console.log('Connected to the server');
};

socket.onmessage = function(event) {
  console.log('Received:', event.data);
};

socket.onclose = function(event) {
  console.log('Disconnected from the server');
};

socket.onerror = function(error) {
  console.error('WebSocket error:', error);
};

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};
xhr.send();
