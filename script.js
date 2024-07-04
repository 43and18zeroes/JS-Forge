function talk(lang, isPolite) {
  if (isPolite) {
    if (lang === 'en') {
      return `Hello, I am ${this.name}`;
    } else if (lang === 'it') {
      return `Ciao bella, sono ${this.name}`;
    }
  }

  if (!isPolite) {
    if (lang === 'en') {
      return `I am ${this.name}, what you want?`;
    } else if (lang === 'it') {
      return `Sono ${this.name}, 'angry gesture'`;
    }
  }
}

const me = {
  name: 'Sina',
};

console.log(talk.call(me, 'en', true)); // Hello, I am Sina
console.log(talk.call(me, 'it', true)); // Ciao bella, sono Sina
console.log(talk.call(me, 'en', false)); // I am Sina, what you want?
console.log(talk.call(me, 'it', false)); // Sono Sina, 'angry gesture'

const promise10 = new Promise((resolve, reject) => {
  resolve("Start");
});

promise10
  .then((value) => {
    console.log(value); // "Start"
    throw new Error("Fehler im then");
  })
  .catch((error) => {
    console.log(error.message); // "Fehler im then"
  });