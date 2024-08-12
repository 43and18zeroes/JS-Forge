let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

let isShopOpen = true;

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
    console.log(`${stocks.Fruits[0]}`)
  } catch (error) {
    console.log('customer left'), error;
  } finally {
    console.log('day ended, shop is closed');
  }
}

kitchen();
