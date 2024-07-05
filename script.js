const handler = {
  get: function(target, prop, receiver) {
      if (prop in target) {
          return target[prop];
      } else {
          throw new Error(`Property ${prop} does not exist.`);
      }
  }
};

const person = {
  name: "John",
  age: 30
};

const proxyPerson = new Proxy(person, handler);
console.log(proxyPerson.name); // John
console.log(proxyPerson.age); // 30
// console.log(proxyPerson.address); // Error: Property address does not exist.