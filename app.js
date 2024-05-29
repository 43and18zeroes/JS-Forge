const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  setTimeout(() => {
    console.log('1000ms');
  }, 1000);
}

button.addEventListener('click', trackUserHandler); // Callback Function
