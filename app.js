let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

let order = (fruitName, callProduction) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[fruitName]}`);
  }, 2000);
  callProduction();
};

let production = () => {};

order(0, production);
