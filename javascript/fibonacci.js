function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    let lastTwoNums = [0, 1];
    for (let i = 0; i < num - 1; i++) {
      const sum = lastTwoNums[0] + lastTwoNums[1];
      lastTwoNums = [lastTwoNums[1], sum];
    }
    return lastTwoNums[1]
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
