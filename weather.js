class Person {
  talk() {
    return 'Talking'
  }
}

const me = new Person();
const you = new Person();

console.log(me.talk());
console.log(you.talk());