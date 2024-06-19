function greet() {
  console.log(this.name);
}
const person = { name: 'Carol' };
greet.call(person); // Ausgabe: 'Carol'