function talk() {
    return `I am ${this.name}`;
}

const me = {
    name: 'Sina',
}

const meTalk = talk.bind(me)
console.log(meTalk()); // I am Sina