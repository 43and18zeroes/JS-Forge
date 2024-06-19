function talk() {
    return `I am ${this.name}`;
}

const me = {
    name: 'Sina',
    talk
}

const you = {
    name: 'Qoli',
    talk
}

console.log(me.talk()); // I am Sina
console.log(you.talk()); // I am Quoli