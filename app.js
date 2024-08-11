function funcOne(callTwo) {
  console.log('step 1 complete. please call step 2');
  callTwo();
}

function funcTwo() {
  console.log('step 2');
}

funcOne(funcTwo);