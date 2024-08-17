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

// advanced promises

class PromiseQueue {
  constructor() {
      this.queue = [];
      this.running = false;
  }

  add(promise) {
      this.queue.push(promise);
      if (!this.running) {
          this.run();
      }
  }

  async run() {
      this.running = true;
      while (this.queue.length) {
          const promise = this.queue.shift();
          try {
              await promise();
          } catch (error) {
              console.error('Error:', error);
          }
      }
      this.running = false;
  }
}

const queue = new PromiseQueue();
queue.add(() => fetch('https://api.example.com/data1').then(response => response.json()));
queue.add(() => fetch('https://api.example.com/data2').then(response => response.json()));