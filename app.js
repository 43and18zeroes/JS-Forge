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

// Advanced functions

console.log(advancedFilter([1, 2, 6, 7, 8, 10])); // [6, 8, 10]
asyncFunction().then(console.log); // After 2 seconds, "Data fetched successfully!"
const curriedSum = curry((a, b) => a + b);
console.log(curriedSum(1)(2)); // 3
const memoizedFactorial = memoize(n => n <= 1 ? 1 : n * memoizedFactorial(n - 1));
console.log(memoizedFactorial(5)); // 120
const gen = infiniteSequence();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
const proxyObj = createProxy({ a: 1, b: 2 });
console.log(proxyObj.a); // 1
// console.log(proxyObj.c); // Error: Property c does not exist.
console.log(flattenArray([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]
const debouncedLog = debounce(() => console.log("Debounced!"), 1000);
debouncedLog();
const throttledLog = throttle(() => console.log("Throttled!"), 1000);
throttledLog();
console.log(deepClone({ a: 1, b: { c: 2 } })); // { a: 1, b: { c: 2 } }