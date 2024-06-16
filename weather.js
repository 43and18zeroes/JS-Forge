// class Person {
//   talk() {
//     return 'Talking';
//   }
// }

// const me = new Person();
// console.log(me.talk());

// class SuperHuman extends Person {
//   fly() {
//     return 'Flying';
//   }
// }

// const you = new SuperHuman();
// console.log(you.fly());
// console.log(you.talk());
// console.log(me.fly());

const dude = {};
dude.name = 'Chris';
dude.age = '38';

console.log(dude.name);
console.log(dude.age);
console.log(dude.anything);
console.log(dude.toString());

setTimeout(() => {
  console.log('Diese Nachricht wird nach 2 Sekunden angezeigt.');
}, 2000);

const intervalId = setInterval(() => {
  console.log('Diese Nachricht wird alle 3 Sekunden angezeigt.');
}, 3000);

// Um das Intervall zu stoppen
setTimeout(() => {
  clearInterval(intervalId);
  console.log('Intervall gestoppt.');
}, 10000);

fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Fehler:', error));

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Erfolg!');
  }, 1000);
});

promise
  .then(value => {
    console.log(value); // "Erfolg!"
  })
  .catch(error => {
    console.error('Fehler:', error);
  });

async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fehler:', error);
  }
}

fetchData();

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(values => {
    console.log(values); // [3, 42, "foo"]
});


console.log('Start');

setTimeout(() => {
    console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise');
});

console.log('End');
