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
    console.log("Diese Nachricht wird nach 2 Sekunden angezeigt.");
}, 2000);


const intervalId = setInterval(() => {
    console.log("Diese Nachricht wird alle 3 Sekunden angezeigt.");
}, 3000);

// Um das Intervall zu stoppen
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Intervall gestoppt.");
}, 10000);

fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Fehler:', error));
