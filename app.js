let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

let order = (fruitName, callProduction) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[fruitName]} was selected`);
  }, 2000);
  callProduction();
};

let production = () => {
  setTimeout(() => {
    console.log("production has started");
  }, 0)
};

order(0, production);
