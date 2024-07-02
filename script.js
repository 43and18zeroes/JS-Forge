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

setTimeout(() => {
  console.log('Dies wird nach 2 Sekunden ausgeführt');
}, 2000);

let counter = 0;
const intervalId = setInterval(() => {
  console.log('Dies wird alle 1 Sekunde ausgeführt');
  counter++;
  if (counter === 3) {
    clearInterval(intervalId);
  }
}, 1000);

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Erfolg!');
  }, 1000);
});

myPromise.then((value) => {
  console.log(value);
});