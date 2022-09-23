function reverseString(str) {
  // type your code here
  let array = [];
  let charsArr = str.split("")

  for(let i = charsArr.length - 1; i >= 0; i--){
    array.push(charsArr[i])
  }

  return array.join("")
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;
// return result
// Please add your pseudocode to this file
// And a written explanation of your solution

// WITHOUT REVERSE ARRAY METHOD
// 1. initialize a variable called array, equal to an empty array
// 2. Then create an array out of a string called charsArray equal to string.split and pass it an empty string.
// 3. return charsArr, This takes the string and puts each of the characters into an array. At this point it is not reversed yet, but I converted into an array to use the split method. 
// 4. Now, loop over array using for loop. 
    // i = charsArray.length - 1 (This would be the last index) 
    // loop up to i >= 0 (to the very first index)
    // decrement i by 1 each time, i--
    // Get empty array, push on the value from the characters Array
// 5. Now turn array back into a string by return array.join("")

//NOW, the longer the string the more calculations need to be done of course. Improved efficiency using Pointers in example below

function revString2(str){
  let arr = new Array(str.length)
  let charsArr = str.split("")

  let left = 0;
  let right = charsArr.length - 1

  while(left <= right){
    arr[left] = charsArr[right]
    arr[right] = charsArr[left]
    left++
    right--
  }
//Return array with only line 43 and return, and the array will be empty and point to 5 empty spaces within it. The reasoning is that when we build upon this we can build up from both sides.
  return arr.join("")
}

console.log(revString2("Samantha"));

//1. This time we will not assign our first array empty, we will assign it to new Array with str.length. This will create an array that is the length of the string
//2. Now we will define our charsArray again, the same as before by splitting up into characters
//3. Define left pointer, which will point at 0 which is the first item in the characters array
//4. Define another pointer(right) which will point to the last index of our characters array
//5. create a while loop, that will complete the loop while left is less than or equal to the right do X
//6. in loop, declare very first item in arr equal to very last item in charsArray (building up in reverse)
//7. in loop, declare very last item in arr equal to very first item in charsArray
//8. Now we will increment the left pointer by 1, and decrement the right pointer by 1
//9. Finally, we will return our arr and join it up into a string

// This 2nd method is better in terms of performance and time, as it only loops over the array half the number of times. As soon as the pointers meet in the middle, they're done!
// Disadvantge is it stores one extra variable in memory, but not that big of a deal as it saves quite a bit of operations in the middle.

// THIRD EXAMPLE - Easy way of achieving result, but used built in reverse method

function revString3(str){
  return str.split("").reverse().join("")
}

//Splitting string, then reversing it, then joining back together into one string

