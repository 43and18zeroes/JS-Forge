const person = {
  name: "John",
  age: 30,
  address: {
      city: "New York",
      zip: "10001"
  }
};

const { name, age, address: { city } } = person;
console.log(name); // John
console.log(age); // 30
console.log(city); // New York