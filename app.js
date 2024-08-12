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

function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
      return obj;
  }
  const clone = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
          clone[key] = deepClone(obj[key]);
      }
  }
  return clone;
}

const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);
console.log(cloned); // { a: 1, b: { c: 2 } }
console.log(original === cloned); // false