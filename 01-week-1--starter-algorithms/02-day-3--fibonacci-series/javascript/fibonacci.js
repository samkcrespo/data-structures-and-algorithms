function fibonacci(num){
if (num < 2) {
  return num;
}

let fib = [0, 1];

for (let i = 0; i < num - 1; ++i) {
  const sum = fib[0] + fib[1];
  fib = [fib[1], sum];
}

return fib[1];
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
