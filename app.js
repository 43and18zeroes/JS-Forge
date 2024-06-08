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
    const data = { user: 'John Doe', age: 25 };
    callback(data);
  }, 2000);
}

fetchData((data) => {
  console.log('Received data:', data);
});


const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { user: 'Jane Doe', age: 30 };
      resolve(data);
    }, 2000);
  });
};

fetchData()
  .then((data) => {
    console.log('Received data:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });


  async function* asyncGenerator() {
    const data = [1, 2, 3];
    for (const item of data) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      yield item;
    }
  }
  
  (async () => {
    for await (const value of asyncGenerator()) {
      console.log(value); // Outputs 1, 2, 3 each after a 1-second delay
    }
  })();
  

  function fetchData(callback) {
    setTimeout(() => {
      const data = { user: 'John Doe', age: 25 };
      callback(data);
    }, 2000);
  }
  
  fetchData((data) => {
    console.log('Received data:', data);
  });
  

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { user: 'Jane Doe', age: 30 };
        resolve(data);
      }, 2000);
    });
  };
  
  fetchData()
    .then((data) => {
      console.log('Received data:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  

    const fetchData = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const data = { user: 'Alice', age: 28 };
          resolve(data);
        }, 2000);
      });
    };
    
    const getData = async () => {
      try {
        const data = await fetchData();
        console.log('Received data:', data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    getData();
    

    const fetchUserData = async () => {
      try {
        const response = await fetch('https://api.example.com/user');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Received user data:', data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    
    fetchUserData();
    