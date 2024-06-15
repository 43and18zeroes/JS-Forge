class Person {
  talk() {
    return 'Talking';
  }
}

const me = new Person();
const you = new Person();

console.log(me.talk());
console.log(me);
console.log(me.__proto__.talk());

me.__proto__.talk = function () {
  return 'New Talk';
};

console.log(you.talk());