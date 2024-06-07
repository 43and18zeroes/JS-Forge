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
    const data = "some data";
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log("Callback received:", data);
});


function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "some data";
      resolve(data);
    }, 1000);
  });
}

fetchData()
  .then((data) => {
    console.log("Promise resolved:", data);
  })
  .catch((error) => {
    console.error("Promise rejected:", error);
  });

  async function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "some data";
        resolve(data);
      }, 1000);
    });
  }
  
  async function getData() {
    try {
      const data = await fetchData();
      console.log("Async/Await received:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  getData();

  
  