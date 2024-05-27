// It takes a couple a bit of time to log the result. The eventlistener can’t be fired until the loop is complete.
// Single-Threading in action: The eventlistener is blocked until the operations in the loop are done.

const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    posData => {
      console.log(posData);
    },
    error => {
      console.log(error);
    }
  );
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler); // Callback Function

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);


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
console.log('Data fetching initiated...');