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

function curry(fn) {
  return function curried(...args) {
      if (args.length >= fn.length) {
          return fn.apply(this, args);
      } else {
          return function(...args2) {
              return curried.apply(this, args.concat(args2));
          }
      }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // 6