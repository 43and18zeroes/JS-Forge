class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  emit(eventName, ...args) {
    const event = this.events[eventName];
    if (event) {
      event.forEach(callback => callback.apply(null, args));
    }
  }

  off(eventName, callback) {
    this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
  }
}

const emitter = new EventEmitter();
const logData = data => console.log('Data received:', data);
emitter.on('data', logData);
emitter.emit('data', 'Hello, world!'); // Data received: Hello, world!
emitter.off('data', logData);