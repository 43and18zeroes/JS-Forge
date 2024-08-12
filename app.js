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

function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
      if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
      }
  };
}

const handleScroll = throttle(() => {
  console.log('Scrolled');
}, 100);

window.addEventListener('scroll', handleScroll);