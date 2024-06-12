const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = opts => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      success => {
        resolve(success);
      },
      error => {},
      opts
    );
  });
  return promise;
};

const setTimer = duraction => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duraction);
  });
  return promise;
};

function trackUserHandler() {
  let positionData;
  getPosition()
    .then(posData => {
      positionData = posData;
      return setTimer(2000);
    })
    .then(data => {
      console.log(data, positionData);
    });
  setTimer(1000).then(() => {
    console.log('Time done!');
  });
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

function getWeather() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve('Sunny');
    }, 100)
  });
}

function getWeatherIcon(weather) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      switch(weather) {
        case 'Sunny':
          resolve('Sunny Icon')
          break
        case 'Cloudy':
          resolve('Cloudy Icon')
          break
        case 'Rainy':
          resolve('Rainy Icon')
          break
        default:
          reject('NO ICON FOUND')
      }
    }, 100)
  })
}

function onSuccess(data) {
  console.log(`Success ${data}`);
}

function onError(error) {
  console.log(`Error ${error}`);
}

getWeather()
  .then(getWeatherIcon)
  .then(onSuccess, onError)