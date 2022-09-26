function selectionSort(arr) {
  // type your code here
  const sortedArr = [];

while(arr.length > 0) {
  const min = Math.min(...arr);
  const index = arr.indexOf(min);

  sortedArr.push(min);
  arr.splice(index, 1)
}
return sortedArr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution

//Initialize an empty array name sortedArr
// Next, iterate over the input array (arr) using a while loop, while the input
//array is greater than 0. For each element in the array, I will store the min value in the array
// in my 'min' variable
