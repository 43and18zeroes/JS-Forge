function curry(f) {
  return function(a) {
      return function(b) {
          return f(a, b);
      };
  };
}
const sum = (a, b) => a + b;
const curriedSum = curry(sum);
console.log(curriedSum(1)(2)); // 3