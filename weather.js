class Person {
  talk() {
    return 'Talking';
  }
}

const me = new Person();
console.log(me.talk());

class SuperHuman extends Person {
  fly() {
    return 'Flying';
  }
}

const you = new SuperHuman();
console.log(you.fly());
console.log(you.talk());