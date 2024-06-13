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

function fun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Good data');
    }, 100);
  });
}

function fun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Mustache Emoji');
    }, 100);
  });
}

function onSuccess(data) {
  console.log(`Success: ${data}`);
}

function onError(errorCode) {
  console.log(`ERROR: ${errorCode}`);
}

function onFinally() {
  console.log('Finally we be done');
}

fun1()
  .then(fun2)
  .then(onSuccess)
  .catch(onError)
  .finally(onFinally)