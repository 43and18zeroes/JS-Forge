function multiplyBy(factor) {
  return function(number) {
      return number * factor;
  };
}

const multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(5)); // 10