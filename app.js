// function order(callProduction) {
//   console.log('order placed, please call production');
//   callProduction();
// }

let order = callProduction => {
  console.log('order placed, please call production');
  callProduction();
};

let production = () => {
  console.log('order received, starting production');
};

order(production);