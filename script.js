function talk() {
    return `I am ${this.name}`;
}

const me = {
    name: 'Sina',
}

console.log(talk.call(me)); // I am Sina