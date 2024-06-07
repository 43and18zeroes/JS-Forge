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

function fetchData(callback) {
  setTimeout(() => {
    const data = 'some data';
    callback(data);
  }, 1000);
}

fetchData(data => {
  console.log('Callback received:', data);
});

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'some data';
      resolve(data);
    }, 1000);
  });
}

fetchData()
  .then(data => {
    console.log('Promise resolved:', data);
  })
  .catch(error => {
    console.error('Promise rejected:', error);
  });

async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'some data';
      resolve(data);
    }, 1000);
  });
}

async function getData() {
  try {
    const data = await fetchData();
    console.log('Async/Await received:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

getData();

async function fetchUserData() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/1'
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const userData = await response.json();
    console.log('User Data:', userData);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

fetchUserData();

async function fetchMultipleData() {
  const urls = [
    'https://jsonplaceholder.typicode.com/users/1',
    'https://jsonplaceholder.typicode.com/users/2'
  ];

  try {
    const promises = urls.map(url => fetch(url).then(response => response.json()));
    const results = await Promise.all(promises);
    console.log("Results:", results);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchMultipleData();

async function fetchMultipleData() {
  const urls = [
    'https://jsonplaceholder.typicode.com/users/1',
    'https://jsonplaceholder.typicode.com/users/2'
  ];

  try {
    const promises = urls.map(url => fetch(url).then(response => response.json()));
    const results = await Promise.all(promises);
    console.log("Results:", results);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchMultipleData();


const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [3, 42, "foo"]
});


