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

const me = new Dude('Sina');
console.log(me);
console.log(me.prototype);
console.log(me.__proto__);
console.log(Dude.prototype);
console.log(me.__proto__ === Dude.prototype);


Dude.prototype.talk = function() {
    return 'Talking';
}
console.log(me.talk());
console.log(me.__proto__);