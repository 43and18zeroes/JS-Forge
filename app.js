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
const fileInput = document.getElementById('fileInput');

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  
  reader.onload = async (e) => {
    const text = e.target.result;
    console.log(text);
  };
  
  reader.readAsText(file);
});


const socket = new WebSocket('wss://example.com/socket');

socket.addEventListener('open', (event) => {
  socket.send('Hello Server!');
});

socket.addEventListener('message', (event) => {
  console.log('Message from server:', event.data);
});


let db;
const request = indexedDB.open('MyDatabase', 1);

request.onupgradeneeded = (event) => {
  db = event.target.result;
  db.createObjectStore('store', { keyPath: 'id' });
};

request.onsuccess = (event) => {
  db = event.target.result;
  const transaction = db.transaction('store', 'readwrite');
  const store = transaction.objectStore('store');

  const addRequest = store.add({ id: 1, name: 'John Doe' });

  addRequest.onsuccess = () => {
    console.log('Eintrag hinzugefügt');
  };
};
