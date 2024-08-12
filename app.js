// let stocks = {
//   Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
//   liquid: ['water', 'ice'],
//   holder: ['cone', 'cup', 'stick'],
//   toppings: ['chocolate', 'peanuts'],
// };

// let isShopOpen = true;

let toppingsChoice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log('Which topping would you love?'));
    }, 3000);
  });
};

async function kitchen() {
  console.log('A');
  console.log('B');
  console.log('C');

  await toppingsChoice();

  console.log('D');
  console.log('E');
}

kitchen();

console.log('doing the dishes');
console.log('cleaning the tables');
console.log('taking other orders');
