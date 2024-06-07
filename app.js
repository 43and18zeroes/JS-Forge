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

async function fetchDataWithErrorHandling(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

fetchDataWithErrorHandling('https://jsonplaceholder.typicode.com/posts/1');


async function sequentialTasks() {
  const result1 = await new Promise((resolve) => setTimeout(() => resolve('Task 1 complete'), 1000));
  console.log(result1);

  const result2 = await new Promise((resolve) => setTimeout(() => resolve('Task 2 complete'), 1000));
  console.log(result2);

  const result3 = await new Promise((resolve) => setTimeout(() => resolve('Task 3 complete'), 1000));
  console.log(result3);
}

sequentialTasks();

async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      if (i === retries - 1) throw error;
    }
  }
}

fetchWithRetry('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => console.log(data))
  .catch(error => console.error('Fetch error:', error));

