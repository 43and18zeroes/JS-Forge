function SuperElement(type, content) {
  this.el = document.createElement(type);
  this.el.innerText = content;
  document.body.append(this.el);
  this.el.addEventListener('click', () => {
    console.log(this.el);
  });
}

const array = ['a', 'b', 'c'];
const myElements = array.map(item => {
  return new SuperElement('p', item);
});
console.log(myElements);


let zahlen = [1, 2, 3, 4, 5];
// let verdoppelteZahlen = zahlen.map(function(zahl) {
//   return zahl * 2;
// });
let verdoppelteZahlen = zahlen.map(zahl => zahl * 2);
console.log(verdoppelteZahlen); // Ausgabe: [2, 4, 6, 8, 10]