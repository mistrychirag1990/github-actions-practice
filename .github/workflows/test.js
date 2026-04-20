function sum(a, b) {
  return a + b;
}

// simple test
if (sum(2, 3) !== 5) {
  throw new Error("Test failed!");
}

console.log("All tests passed!");