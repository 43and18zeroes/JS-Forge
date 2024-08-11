let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

// function order(callProduction) {
//   console.log('order placed, please call production');
//   callProduction();
// }

let order = (fruitName, callProduction) => {
  callProduction();
};

let production = () => {};

order('', production);
