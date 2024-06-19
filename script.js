function talk(lang) {
    if (lang === 'en') {
        return `I am ${this.name}`;
    } else if (lang === 'it') {
        return `Io sono ${this.name}`;
    }
}

const me = {
    name: 'Sina',
}

console.log(talk.call(me, 'en')); // I am Sina
console.log(talk.call(me, 'it')); // Io sono Sina