let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

let isShopOpen = true;

// let order = () => {
//   return new Promise((resolve, reject) => {
//     if(true) {
//       resolve()
//     }
//     else {
//       reject()
//     }
//   })
// }

// order()
// .then() // resolved
// .then() // resolved
// .then() // resolved
// .catch() // rejected
// .finally() // resolved or rejected

async function order() {
  try {
    await abc;
  } catch (error) {
    console.log("abc doesn't exist", error);
  } finally {
    console.log('runs code anyways');
  }
}

order().then(()=>{
  console.log('test text');
})


// advanced

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
}

const emitter = new EventEmitter();
emitter.on('greet', name => console.log(`Hello, ${name}!`));
emitter.emit('greet', 'John'); // Hello, John!