function fibonacci(num) {
  if (num < 2) {
    return num;
  }

  let lastTwo = [0, 1];

  for (let i = 0; i < num - 1; ++i) {
    const sum = lastTwo[0] + lastTwo[1];
    lastTwo = [lastTwo[1], sum];
  }
  // 1 loop,  sum= 1, lasttwo = 1, 1
  // 2 loop, sum=2  lasttwo = 1, 2
  // 3 loop, sum= 3 lasttwo =  2,3
  // 4 loop, sum=  5 lasttwo = 3,5
  // 5 loop, sum= 8   lasttwo = 5,8 
  // 6 loop, sum=  13  lasttwo = 8, 13
  // 7 loop, sum=  21  lasttwo = 13, 21
  // 8 loop, sum=  34 lasttwo = 21, 34
  // 9 loop, sum= 55 lasttwo =
  return lastTwo[1];
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log(fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log(fibonacci(10));

  console.log("");

  console.log("Expecting: 1");
  console.log(fibonacci(1));

  console.log("");

  console.log("Expecting: 6765");
  console.log(fibonacci(20));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
/********************************************************************
 * if the input is 0 or 1, return the input
 *
 * initialize an Array called lastTwo with the first two values from the sequence
 *
 * loop input - 1 times:
 *    store the sum of the values in lastTwo in a variable called sum
 *    remove the first element from lastTwo
 *    push sum onto lastTwo
 *
 * return the last value in lastTwo
 * *****************************************************************/

// And a written explanation of your solution
/********************************************************************
 * Since the fibonacci sequence is always the same, I can initialize an Array
 * with the first two values of the sequence. I only need to store two values
 * because the next value is the sum of the two values that came before it. By
 * adding up the two values I'm storing, I'll always get the next value. If I do
 * that enough times (num - 1), once I'm done adding up the values, the last value
 * will be the nth value in the sequence. Every time I add up the two values, I need
 * to remove the 0th value I'm storing and then push the sum onto that array.
 ***********************************************************************/
