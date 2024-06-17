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

// const dude = {};
// dude.name = 'Chris';
// dude.age = '38';

// console.log(dude.name);
// console.log(dude.age);
// console.log(dude.anything);
// console.log(dude.toString());

// const myBrothers = ['Ben', 'Sam']
// console.log(myBrothers);

// const myName = 'Chris';
// console.log(myName.__proto__);

// const human = {
//   kind: 'Human',
// };

// const sina = Object.create(human);
// sina.age = 34;
// console.log(sina);

// const ben = Object.create(sina)
// ben.age = 27;
// console.log(ben); 

function Dude(name) {
    this.name = name;
}

const me = new Dude('Sina');
console.log(me);
console.log(me.prototype);
console.log(me.__proto__);
console.log(Dude.prototype);
console.log(me.__proto__ === Dude.prototype);

Dude.prototype.talk = function() {
    return 'Talking';
}
console.log(me.talk());
console.log(me.__proto__);