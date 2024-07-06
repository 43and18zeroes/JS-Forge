const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('event', () => {
  console.log('Ein Event wurde ausgelöst!');
});

setTimeout(() => {
  myEmitter.emit('event');
}, 1000);