// class Person {
//   talk() {
//     return 'Talking';
//   }
// }

// const me = new Person();
// const you = new Person();

// console.log(me.talk());
// console.log(you.talk());

// Person.prototype.talk = function () {
//   return 'New Talk';
// };

// console.log(me.talk());
// console.log(you.talk());

function Person() {
  this.age = 12;
}

const me = new Person();

console.log(me.age);

Person.age = 40;

console.log(me.age);