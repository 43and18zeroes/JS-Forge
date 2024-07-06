function* generatorFunction() {
  let i = 0;
  while (true) {
      yield i++;
  }
}
const gen = generatorFunction();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1