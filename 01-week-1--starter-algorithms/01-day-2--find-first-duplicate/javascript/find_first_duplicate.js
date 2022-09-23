function findFirstDuplicate(arr) {
  const uniqueSet = new Set();

  for (const value of arr) {
    if (uniqueSet.has(value)) {
      return value;
    }

    uniqueSet.add(value);
  }

  return -1;
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;



// Please add your pseudocode to this file
// And a written explanation of your solution

// Initialize an empty set called uniqueSet
//iterate through the array,  if the value is in uniqueSet, return the value
//   else (the value is not already in the uniqueSet) add the value the set array

// return -1 if no duplicate found in array

