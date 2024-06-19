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

function createElement(type, text, color) {
  const el = document.createElement(type);
  el.innerText = text;
  el.style.color = color;
  document.body.append(el);
  return {
    el,
    setText(text) {
      el.innerText = text;
    },
    setColor(color) {
      el.style.color = color;
    },
  };
}


const h1 = createElement('h1', 'Hey guys', 'red');
console.log(h1);
h1.setText('New Text');
console.log(h1);
