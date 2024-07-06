function partial(func, ...fixedArgs) {
  return function(...remainingArgs) {
      return func(...fixedArgs, ...remainingArgs);
  };
}
const multiply = (a, b) => a * b;
const double = partial(multiply, 2);
console.log(double(5)); // 10