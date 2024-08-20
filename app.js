let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

let isShopOpen = false; // FALSE

function time(ms) {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log('shop is closed'));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`2s ${stocks.Fruits[0]} was selected`);

    await time(0);
    console.log('2s start the production');

    await time(2000);
    console.log('4s cut the fruit');

    await time(1000);
    console.log(`5s ${stocks.liquid[0]} and ${stocks.liquid[1]}`);

    await time(1000);
    console.log(`6s start the machine`);

    await time(2000);
    console.log(`8s ice cream placed on ${stocks.holder[0]}`);

    await time(3000);
    console.log(`11s ${stocks.toppings[0]} was selected`);

    await time(2000);
    console.log(`13s serve ice cream`);
  } catch (error) {
    console.log('customer left'), error;
  } finally {
    console.log('day ended, shop is closed');
  }
}

kitchen();

// rng

function getRandomGaussian(mean, stdDev) {
  let u = 0, v = 0;
  while (u === 0) u = Math.random(); // Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  return num * stdDev + mean;
}
console.log(getRandomGaussian(0, 1));