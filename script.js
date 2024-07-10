function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const fib = memoize(function(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
});
console.log(fib(10)); // 55

function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

const handleResize = debounce(() => {
  console.log('Resized');
}, 300);
window.addEventListener('resize', handleResize);

function throttle(fn, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

const handleScroll = throttle(() => {
  console.log('Scrolled');
}, 100);
window.addEventListener('scroll', handleScroll);

function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  const clone = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);
console.log(cloned); // { a: 1, b: { c: 2 } }

if (!Promise.allSettled) {
  Promise.allSettled = function(promises) {
    return Promise.all(
      promises.map(p =>
        Promise.resolve(p).then(
          value => ({ status: 'fulfilled', value }),
          reason => ({ status: 'rejected', reason })
        )
      )
    );
  };
}

const promises = [Promise.resolve(1), Promise.reject('Error')];
Promise.allSettled(promises).then(results => console.log(results));

async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

fetchData().then(data => console.log(data)).catch(error => console.error(error));

function* fibonacci() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const gen = fibonacci();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
  }

  emit(eventName, ...args) {
    const listeners = this.events[eventName];
    if (listeners) {
      listeners.forEach(listener => listener(...args));
    }
  }

  off(eventName, listener) {
    const listeners = this.events[eventName];
    if (listeners) {
      this.events[eventName] = listeners.filter(l => l !== listener);
    }
  }
}

const emitter = new EventEmitter();
const logData = data => console.log('Data:', data);
emitter.on('data', logData);
emitter.emit('data', 'Hello, World!'); // Data: Hello, World!
emitter.off('data', logData);

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const add1 = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

const pipeline = pipe(add1, double, square);
console.log(pipeline(2)); // 36

function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

const lazyRange = range(1, 5);
console.log(lazyRange.next().value); // 1
console.log(lazyRange.next().value); // 2

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const add5 = x => x + 5;
const multiplyBy2 = x => x * 2;
const subtract3 = x => x - 3;

const composedFunction = compose(subtract3, multiplyBy2, add5);
console.log(composedFunction(2)); // 11

document.addEventListener('click', function(event) {
  if (event.target.matches('.clickable')) {
    console.log('Clicked on a clickable element');
  }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Element is now visible:', entry.target);
    }
  });
});

const target = document.querySelector('#targetElement');
observer.observe(target);

// main.js
const worker = new Worker('worker.js');
worker.postMessage('Hello from main thread');

worker.onmessage = function(event) {
  console.log('Message from worker:', event.data);
};

// worker.js
self.onmessage = function(event) {
  console.log('Message from main thread:', event.data);
  self.postMessage('Hello from worker thread');
};

const observer2 = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    console.log('Mutation detected:', mutation);
  });
});

const targetNode = document.querySelector('#targetNode');
const config = { attributes: true, childList: true, subtree: true };
observer2.observe(targetNode, config);

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CustomError';
  }
}

try {
  throw new CustomError('This is a custom error');
} catch (e) {
  console.error(e.name); // CustomError
  console.error(e.message); // This is a custom error
}

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CustomError';
  }
}

try {
  throw new CustomError('This is a custom error');
} catch (e) {
  console.error(e.name); // CustomError
  console.error(e.message); // This is a custom error
}

const handler = {
  get: function(target, prop, receiver) {
    if (prop in target) {
      return target[prop];
    } else {
      throw new Error(`Property ${prop} does not exist`);
    }
  }
};

const target2 = { a: 1, b: 2 };
const proxy = new Proxy(target2, handler);

console.log(proxy.a); // 1
try {
  console.log(proxy.c); // Error: Property c does not exist
} catch (e) {
  console.error(e.message);
}

async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Advanced functions

// example10.js
async function fetchPostsByIds(ids) {
  try {
    const promises = ids.map(async id => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      return response.json();
    });
    const posts = await Promise.all(promises);
    console.log(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

fetchPostsByIds([1, 2, 3]);