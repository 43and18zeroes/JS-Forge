let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

let isShopOpen = true;

let order = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      resolve()
    }
    else {
      reject()
    }
  })
}

order()
.then() // resolved
.then() // resolved
.then() // resolved
.catch() // rejected
.finally() // resolved or rejected

// async function order(){}