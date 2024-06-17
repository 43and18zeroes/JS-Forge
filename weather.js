function personFactory(name) {
  return {
    talk() {
      return `Hello I am ${name}`;
    },
  };
}

const me = personFactory('Chris');
console.log(me.talk());

const ben = personFactory('Ben');
console.log(ben.talk());
