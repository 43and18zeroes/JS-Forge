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

const throttled = throttle(() => console.log('Throttled!'), 1000);
const debounced = debounce(() => console.log('Debounced!'), 1000);
const curriedAdd = curry((a, b, c) => a + b + c);
const memoizedFib = memoize(function(n) {
  if (n <= 1) return n;
  return memoizedFib(n - 1) + memoizedFib(n - 2);
});
const flattenArray = flatten([1, [2, [3, 4], 5], 6]);
const uniqueArray = unique([1, 2, 2, 3, 4, 4, 5]);
const grouped = groupBy([{name: 'Alice', age: 21}, {name: 'Bob', age: 22}, {name: 'Charlie', age: 21}], 'age');
const piped = pipe(x => x * 2, x => x + 1)(5);
const composed = compose(x => x * 2, x => x + 1)(5);

console.log('Throttled:', throttled);
console.log('Debounced:', debounced);
console.log('Curried Add:', curriedAdd(1)(2)(3));
console.log('Memoized Fib:', memoizedFib(10));
console.log('Flatten Array:', flattenArray);
console.log('Unique Array:', uniqueArray);
console.log('Grouped:', grouped);
console.log('Piped:', piped);
console.log('Composed:', composed);