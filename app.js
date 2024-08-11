let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

let order = (fruitName, callProduction) => {
  setTimeout(() => {
    console.log(`2s: ${stocks.Fruits[fruitName]} was selected`);
    callProduction();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log('2s: production has started');
    setTimeout(() => {
      console.log('4s: the fruit has been chopped');
      setTimeout(() => {
        console.log(
          `5s: ${stocks.liquid[0]} and ${stocks.liquid[1]} was added`
        );
        setTimeout(() => {
          console.log('6s: the machine was started');
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};

order(0, production);
