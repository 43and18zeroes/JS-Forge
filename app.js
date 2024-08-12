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

const handler = {
  get: function(target, prop) {
      return prop in target ? target[prop] : 'Not Found';
  },
  set: function(target, prop, value) {
      if (prop === 'age' && value < 0) {
          throw new Error('Age cannot be negative');
      }
      target[prop] = value;
      return true;
  }
};

const person = { name: 'John', age: 30 };
const proxyPerson = new Proxy(person, handler);

console.log(proxyPerson.name); // John
console.log(proxyPerson.gender); // Not Found
proxyPerson.age = -5; // Error: Age cannot be negative