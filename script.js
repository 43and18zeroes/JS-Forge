function talk() {
    return this;
}

const me = {
    name: 'Sina',
    talk
}

console.log(me.talk());