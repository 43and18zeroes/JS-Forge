let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

let isShopOpen = false; // now false

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log('Our shop is closed'));
    }
  });
};

order(2000, () => console.log(`2s. ${stocks.Fruits[0]} was selected`))
  .then(() => {
    return order(0, () => console.log('2s. Production has started'));
  })

  .then(() => {
    return order(2000, () => console.log('4s: the fruit has been chopped'));
  })

  .then(() => {
    return order(1000, () =>
      console.log(`5s: ${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
    );
  })

  .then(() => {
    return order(1000, () => console.log('6s: the machine was started'));
  })

  .then(() => {
    return order(2000, () =>
      console.log(`8s: ice cream was placed on the ${stocks.holder[0]}`)
    );
  })

  .then(() => {
    return order(3000, () =>
      console.log(`11s: ${stocks.toppings[0]} was added as toppings`)
    );
  })

  .then(() => {
    return order(2000, () => console.log('13s: serve ice cream'));
  })

  .catch(() => console.log('Customer left')); // catch

// let order = (fruitName, callProduction) => {
//   setTimeout(() => {
//     console.log(`2s: ${stocks.Fruits[fruitName]} was selected`);
//     callProduction();
//   }, 2000);
// };

// let production = () => {
//   setTimeout(() => {
//     console.log('2s: production has started');
//     setTimeout(() => {
//       console.log('4s: the fruit has been chopped');
//       setTimeout(() => {
//         console.log(`5s: ${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
//         setTimeout(() => {
//           console.log('6s: the machine was started');
//           setTimeout(() => {
//             console.log(`8s: ice cream was placed on the ${stocks.holder[0]}`);
//             setTimeout(() => {
//               console.log(`11s: ${stocks.toppings[0]} was added as toppings`);
//               setTimeout(() => {
//                 console.log('13s: serve ice cream');
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0);
// };

// order(0, production);
